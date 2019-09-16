#!/usr/bin/env python
#
# Copyright 2018 Google Inc.  All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Generates Javascript to load compile-time localization data.

This reads localization data at compile-time in a flat JSON-formatted
dictionary.  The keys are message IDs, and the values are the translated
strings.  For example:
  {
    "BEST_WISHES": "Merin sa haryalye alasse"
  }

Each locale's translations are read from a separate file.  For example, the path
the Arabic data would be ui/locales/ar.json.
"""

import argparse
import contextlib
import json
import os
import sys

import shakaBuildHelpers


_INDENTATION = '  '

# These are Google's "Tier 1" languages as of April 2019.
DEFAULT_LOCALES = [
    'ar',
    'de',
    'en',
    'en-GB',
    'es',
    'es-419',
    'fr',
    'it',
    'ja',
    'ko',
    'nl',
    'pl',
    'pt',
    'ru',
    'th',
    'tr',
    'zh',
    'zh-TW',
]


class Doc(object):
  """A string builder class used to build out a tab-sensitive document."""

  def __init__(self):
    # All the lines that make-up this document.
    self._lines = []

    # Track each tab we need to insert ahead of the next line.
    self._tab_level = 0

  @contextlib.contextmanager
  def Block(self):
    """Starts a new tabbed block.

    This should be used with |with| to ensure that the block closes.
    """
    self._tab_level += 1
    yield
    self._tab_level -= 1

  def Code(self, block):
    """Insert a block of code with the current tab level.

    This will add the required leading white space to the line.
    """
    # Break the code block into each line of code
    lines = block.split('\n')

    for line in lines:
      # Right-strip the line to avoid trailing white space. We do this on the
      # full string so that tabbing will be removed if a blank line was added.
      new_line = (_INDENTATION * self._tab_level) + line
      self._lines.append(new_line.rstrip())

  def ToString(self):
    return '\n'.join(self._lines) + '\n'


def AsQuotedString(input_string):
  """Convert |input_string| into a quoted string."""
  subs = [
      ('\n', '\\n'),
      ('\t', '\\t'),
      ("'", "\\'")
  ]

  # Go through each substitution and replace any occurrences.
  output_string = input_string
  for before, after in subs:
    output_string = output_string.replace(before, after)

  # Lastly wrap the string in quotes.
  return "'%s'" % output_string


def GenerateLocalizations(localizations, class_name):
  """Generates JavaScript code to insert the localization data.

  This creates a function called "addTo" in the class called |class_name| that,
  when called, will insert the data from |localizations|.

  Args:
    localizations: A map of string locale name to a map of string tag to the
      string localization.
    class_name: A string name of the class to put generated code into.

  Returns:
    A string containing the generated code.
  """
  doc = Doc()

  doc.Code("""
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// This file is auto-generated. DO NOT EDIT THIS FILE. If you need to:
//   - change which locales are in this file, use the --locales option in
//     "build/all.py" or "build/build.py"
//   - change an entry for a specific locale, update "ui/locales/"
//   - change anything else, update "build/generateLocalizations.py".
//
// To regenerate this file, run "build/generateLocalizations.py".
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
""")

  # Insert a comment that the build scripts will read to determine the freshness
  # of this output.  This will be compared against a list of locales in the
  # current build to decide if the output needs to be regenerated.
  # DO NOT change the formatting here without also updating the "compiler.py"
  # module and the "GenerateLocalizations" class's "_locales_changed" method.
  locale_list_string = ', '.join(sorted(localizations.keys()))
  doc.Code('// LOCALES: %s' % locale_list_string)

  doc.Code("goog.provide('%s');" % class_name)
  doc.Code("goog.require('shaka.ui.Localization');")

  doc.Code("""
/**
 * Insert all localization data for the UI into |localization|. This should be
 * done BEFORE any listeners are added to the localization system (to avoid
 * callbacks for each insert) and should be done BEFORE changing to the initial
 * preferred locale (reduces the work needed to update the internal state after
 * each insert).
 *
 * @param {!shaka.ui.Localization} localization
 */""")

  doc.Code('%s.addTo = function(localization) {' % class_name)

  message_ids = set()

  # Go through the locales in sorted order so that we will be consistent between
  # runs.
  for locale in sorted(localizations.keys()):
    localization = localizations[locale]

    with doc.Block():
      quoted_locale = AsQuotedString(locale)
      doc.Code('localization.insert(%s, new Map([' % quoted_locale)

      with doc.Block():
        # Make sure that we sort by the localization keys so that they will
        # always be in the same order.
        for key, value in sorted(localization.items()):
          message_ids.add(key)
          quoted_key = AsQuotedString(key)
          quoted_value = AsQuotedString(value)
          doc.Code('[%s, %s],' % (quoted_key, quoted_value))

      doc.Code(']));')  # Close the call to insert.

  doc.Code('};')  # Close the function.

  doc.Code("""
/**
 * @enum {string}
 * @const
 */
%s.Ids = {""" % class_name)
  for message_id in message_ids:
    doc.Code('  %s: %s,' % (message_id, AsQuotedString(message_id)))
  doc.Code('};')

  return doc.ToString()


def CreateParser():
  """Create the argument parser for this application."""
  base = shakaBuildHelpers.get_source_base()

  parser = argparse.ArgumentParser(
      description=__doc__,
      formatter_class=argparse.RawDescriptionHelpFormatter)

  parser.add_argument(
      '--locales',
      type=str,
      nargs='+',
      default=DEFAULT_LOCALES,
      help='The list of locales to compile in (default %(default)r)')

  parser.add_argument(
      '--source',
      type=str,
      default=os.path.join(base, 'ui', 'locales'),
      help='The folder path for JSON inputs')

  parser.add_argument(
      '--output',
      type=str,
      default=os.path.join(base, 'dist', 'locales.js'),
      help='The file path for JavaScript output')

  parser.add_argument(
      '--class-name',
      type=str,
      default='shaka.ui.Locales',
      help='The fully qualified class name for the JavaScript output')

  return parser


def main(args):
  parser = CreateParser()
  args = parser.parse_args(args)

  combined_localizations = {}
  for locale in args.locales:
    path = os.path.join(args.source, locale + '.json')
    with open(path, 'rb') as f:
      combined_localizations[locale] = json.load(f)

  doc = GenerateLocalizations(combined_localizations, args.class_name)
  with open(args.output, 'wb') as f:
    f.write(doc.encode('utf-8'))

  return args.output


if __name__ == '__main__':
  main(sys.argv[1:])
