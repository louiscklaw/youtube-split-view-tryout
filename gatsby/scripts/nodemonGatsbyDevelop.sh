#!/usr/bin/env bash

set -ex

nodemon -w . --ext "scss,css,js,html" --ignore './node_modules' --ignore './public' --exec '\
reset && \
rsync -avzh --exclude ".cache" --exclude ".git" --exclude "node_modules" --exclude "public" . /tmp/gatsby_build && \
cd /tmp/gatsby_build && \
yarn && \
yarn clean && \
yarn build
'