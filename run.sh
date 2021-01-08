#!/bin/bash

docker-compose up -d influxdb grafana
if [[ "$1" == "cloud" ]]; then
  npm run cloud
else
  npm run test
fi