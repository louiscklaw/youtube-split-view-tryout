#!/usr/bin/env bash

set -ex


yarn

yarn clean

nodemon -w . --ignore '**/node_modules' --ignore '**/public' --exec "yarn build"
