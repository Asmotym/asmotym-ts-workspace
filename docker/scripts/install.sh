#!/usr/bin/env bash

# install node
source /root/.nvm/nvm.sh
nvm install

# required for turbo optimizations
pnpm install turbo --global

# install node + packages
pnpm install