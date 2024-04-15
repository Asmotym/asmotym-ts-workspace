#!/usr/bin/env bash

# install node & npm
source /root/.nvm/nvm.sh
nvm install

## install pnpm globally
npm install -g pnpm

# install turbo for build optimizations
pnpm install turbo --global

# install all packages
pnpm install