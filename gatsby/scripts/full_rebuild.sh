#!/usr/bin/env bash

set -ex


# full rebuild

rm -rf node_modules &
rm -rf .cache &
rm -rf public &

wait

scripts/rebuild.sh