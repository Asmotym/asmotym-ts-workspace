# Typescript Workspace

/!\ Still work in progress. Breaking changes can be made at any time. /!\

A complete workspace template to start working on multiple projects in the same place.

## Framework & Technologies

The main feature used in here is `pnpm` and its `workspace` feature (see more [here](https://pnpm.io/workspaces)).
It also features an easy-to-use command line to run different project inside the current workspace.

We start from a simple `vite` application in each project running along with `Typescript` and `Vue 3`.

We additionally use **Turborepo** in, when building to increase efficiency (see more [here](https://turbo.build)).

All of this is offered within a Docker image that can be ran at any time.

### Prerequisites to run the project

#### With Docker

- Docker (to build the image & run the container)

#### Without Docker

- Any OS you want (preferably a linux based one)
- nvm (mandatory to install any node version)
- pnpm (required to run the code in general as we use the pnpm monorepo feature)
- (optional) Makefile (to run make commands built-in with the project to ease some elements)

## Folders Structure

This repository is made of two main folders:

* apps
* packages

### Apps

The `apps` folder contains the "production" applications (like APIs, front-end apps, ...).

### Packages

This folder is used to contain all side repositories. You put all repo's like Helpers libraries, UI, ...

## Building the project dependencies

### Outside the Docker image

If you're not using the built-in Docker image, make sure you meet the requirements before.

After making sure nvm & pnpm are installed, you can run the file `docker/scripts/install.sh`. It will install the correct node version, turborepo & install all packages.

Once done, you take a look at how to run the project [here](#running-the-project).

### Inside the Docker image

First, you need to build the docker image:

````shell
# Using Makefile if you can
make docker-build

# Or directly using the Docker command
docker build --pull --rm -f "./docker/Dockerfile" -t asmotym-ts-workspace:latest "."

# Or running the bash script
sh ./docker/scripts/setup/buildImage.sh
````

You can then run the container:

````shell
# Using Makefile if you can
make docker-run

# Or directly using the Docker command
docker compose -f "docker-compose.yml" up -d --build

# Or running the bash script
sh ./docker/scripts/setup/runContainer.sh
````

And simply enter the container:

````shell
# Using Makefile if you can
make docker-enter

# Or directly using the Docker command
docker exec -it asmotym-ts-workspace_base bash

# Or running the bash script
sh ./docker/scripts/enterContainer.sh
````

Once inside the container, you can install all dependencies by running:

````shell
make install
````

Done! You can now take a look [here](#running-the-project) to see how to run the project.

## Running the project

Once dependencies are installed, you can run the workspace in dev mode:

````shell
pnpm run dev
````

This will run the `dev` script inside the `package.json` of all project across the workspace.

---

If you wish to only run the `front` part:

````shell
pnpm run dev:front
````

Check the main `package.json` and take a look at existing scripts to use.

----

When deploying, simply run this:

````shell
turbo deploy
````

This will run a pipeline of commands to build and lint the entire workspace.