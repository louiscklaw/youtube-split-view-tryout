#!/usr/bin/env bash

set -ex

gatsby new .

yarn add prettier --dev --exact

yarn add gatsby-plugin-offline
