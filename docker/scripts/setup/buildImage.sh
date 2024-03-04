#!/usr/bin/env bash

docker build --pull --rm -f "./docker/Dockerfile" -t asmotym-ts-workspace:latest "."