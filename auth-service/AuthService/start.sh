#!/usr/bin/env bash

dotnet AuthService.dll &
/usr/local/bin/envoy -c /etc/envoy.yaml
