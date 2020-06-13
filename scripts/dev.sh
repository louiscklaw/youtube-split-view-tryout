#!/usr/bin/env bash

ROOT_NODE_PID=`sudo netstat -tpl|grep -i 8000|awk '{print $7}'|awk -F/ '{print $1}'`
kill $ROOT_NODE_PID

set -ex

cd gatsby
  yarn

  yarn clean

  yarn start

cd ..

ROOT_NODE_PID=`netstat -tpl|grep -i 8000|awk '{print $7}'|awk -F/ '{print $1}'`
trap "kill $ROOT_NODE_PID" 0 1 2 3 15