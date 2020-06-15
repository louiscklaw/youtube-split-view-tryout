#!/usr/bin/env bash

ROOT_NODE_PID=`sudo netstat -tpl|grep -i 3000|awk '{print $7}'|awk -F/ '{print $1}'`
kill $ROOT_NODE_PID

set -ex

cd gatsby

nodemon -e 'json' --exec json-server ./channel_list.json

# json-server ./2_channel_list.json  &
# json-server ./full_channel_list.json  &

# done
