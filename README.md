# Senet Estate Sales

A full-stack estate sale listing platform for Senet Estate Sales using Sanity and Next.js App Router (v15).

Notes:

- Deploy by hand when schema changes with `npx sanity deploy` from `studio/` if workflow doesn't work
- Using npm workspaces
  - run `npm i` from root directory on fresh download
  - Install dependencies from root directory with `npm i <package> -w <ws>`
  - Prettier configurations are managed in each root directory's `package.json`, else vscode can't pick it up.
- Vercel deployments
  - Linked to our vercel account project for previewing changes on PR branches
  - Our side's `production` branch is set to `develop`
  - Owner's `production` branch is set to `main`
