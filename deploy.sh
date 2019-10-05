#!/usr/bin/env sh

gulp && \
rm -rf docs &&\
cp -r build docs
