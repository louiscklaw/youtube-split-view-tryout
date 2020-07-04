#!/usr/bin/env bash

set -ex

# yarn
# yarn clean

yarn build

git add .
git commit -m"this commit can build,"