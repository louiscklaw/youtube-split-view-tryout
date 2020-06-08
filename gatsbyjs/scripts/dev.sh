#!/usr/bin/env bash

set -ex

yarn

yarn clean

json-server --watch channel-list.json --no-cors &

yarn develop