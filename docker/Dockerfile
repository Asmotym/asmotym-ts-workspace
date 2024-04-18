FROM ubuntu:22.04

LABEL maintainer="clement.boucherpro@gmail.com"

# Defines what packages to install during "apt-get install"
ENV PACKAGES="\
curl \
git \
ca-certificates \
build-essential \
wget \
"

# Initialize workdir
WORKDIR /home/apps

# Update & Install packages
RUN apt-get update -y && \
    apt-get install --no-install-recommends -y $PACKAGES && \
    rm -rf /var/lib/apt/lists/*

# Run ca-certificates to avoid errors while using curl
RUN update-ca-certificates

# Install nvm (this helps us install node, npm, and pnpm)
ENV NVM_DIR /root/.nvm
RUN mkdir -p $NVM_DIR && curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash && . ~/.bashrc && nvm install --lts
RUN . $NVM_DIR/nvm.sh && ln -s $NVM_DIR/$(nvm current) $NVM_DIR/cur && ln -s $NVM_DIR/versions/node/$(nvm current) $NVM_DIR/versions/node/cur
ENV NODE_PATH $NVM_DIR/cur/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/cur/bin:$PATH

# Install pnpm
RUN npm install -g pnpm@latest-8

# Install turborepo
RUN npm install -g turbo@latest