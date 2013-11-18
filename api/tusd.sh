#! /bin/sh
cd refs/server/tusd
source dev.sh
TUSD_PORT=3002 go run src/cmd/tusd/main.go
