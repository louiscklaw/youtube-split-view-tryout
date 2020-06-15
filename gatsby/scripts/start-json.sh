#!/usr/bin/env bash

set -ex

nodemon -e 'json' --exec json-server ./channel_list.json

# json-server ./2_channel_list.json  &
# json-server ./full_channel_list.json  &

# done
