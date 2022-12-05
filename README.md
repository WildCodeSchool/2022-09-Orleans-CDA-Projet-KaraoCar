# Welcome to this monorepo template!

## Here's how to get started:

1. Clone this repo
2. Take a look inside the `package.json` file. You will see some dependencies and a `workspaces` prop. This is where all the apps are listed. If you need to add a new one, just follow this rule:
   - An app is a standalone application
   - A lib is a standalone package that may be shared between multiple apps
3. Run `npm i`. NPM will take care of installing every workspaces' dependencies
4. See the **Env variables** section to learn more about...... Env variables!

---

## Develop on the web

Simply run `npm run d` (alias for `npm run dev`). It will start both the NestJS backend and all the frontend apps except the mobile one

---

## Develop on mobile

First, start the app with `npm run d` then run `npm run d:m` which is an alias for `npm run dev:mobile`

---

## Env variables

There's a `.env.sample` file at the root of this repo. Copy and paste it as `.env`.

When you run `npm run d` there's a script that runs with `nodemon` to copy the `.env` file in every app workspace (`npm run watch:env` which runs the `env:cp` npm script - feel free to adapt it to your needs)

Doing so will make available your environment variables in every app.

Don't forget to add the `VITE_` prefix to make them visible to the web app!

You will also need to add every environment variable you may need for the mobile app in the `app.config.ts`

---

## Add a new dependency

Run `npm install your-package -w your/workspace/path`

Example: `npm i -S react-router-dom -w apps/frontend/web`
