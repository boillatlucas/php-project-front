#!/bin/sh

set -x
npm i

if [ -n "$1" ]
then
    meteor run --port "http://$(hostname -i):8080"
else
    meteor run --production --port "http://$(hostname -i):8080"
fi

