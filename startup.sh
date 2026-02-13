#!/bin/sh

mv .env.prod .env


chmod +x ./server
nginx -g "daemon on;" & ./server