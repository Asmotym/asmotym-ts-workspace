# Typescript Workspace

A complete workspace template to start working on multiple projects in the same place.

## Framework & Technologies

The main feature used in here is `pnpm` and its `workspace` feature (see more [here](https://pnpm.io/workspaces)).
It also features an easy-to-use command line to run different project inside the current workspace.

We start from a simple `vite` application in each project running along with `Typescript` and `Vue 3`.

## Folders Structure

This repository is made of two main folders:

* apps
* packages

### Apps

The `apps` folder contains the "production" applications (like APIs, front-end apps, ...).

### Packages

This folder is used to contain all side repositories. You put all repo's like Helpers libraries, UI, ...

## How to run

First, make sure you use the correct version of node (install it if missing):

`````shell
nvm use
`````

----

Then, install all packages:

````shell
pnpm install
````

This will basically install packages across all the workspace. PNPM will detect any duplicate dependencies
and create symlinks inside each project. This eases the installation for each repository as well
as spaces on you disk.

----

You can now run the workspace in dev mode:

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
