FROM ubuntu

LABEL maintainer="clement.boucherpro@gmail.com"

# Defines what packages to install during "apt-get install"
ENV PACKAGES="\
curl \
git \
ca-certificates \
build-essential \
"

# Initialize workdir
WORKDIR /home/apps

# Update & Install packages
RUN apt-get update -y && \
    apt-get install --no-install-recommends -y $PACKAGES && \
    rm -rf /var/lib/apt/lists/*

# Run ca-certificates to avoid errors while using curl
RUN update-ca-certificates

# Install required dependecies (nvm, pnpm, turbo repos, ...)
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
RUN curl -fsSL https://get.pnpm.io/install.sh | bash