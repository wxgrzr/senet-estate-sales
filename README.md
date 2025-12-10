# senetestatesales.com

Monorepo for the Senet Estate Sales website — a Next.js frontend in `_app` and a Sanity Studio in `studio`.

## Quick Start

- **Install dependencies (root)**: `npm install`
- **Run both apps (dev)**: `npm run dev` (runs both `_app` and `studio` in parallel)

### Root workspace scripts

- **dev:** `npm run dev` : runs both Next app and Sanity studio in parallel via `npm-run-all`.
- **dev:next:** `npm run dev:next` : runs the Next.js app only (workspace `_app`).
- **dev:studio:** `npm run dev:studio` : runs the Sanity Studio only (workspace `studio`).

### **\_app (Next.js) — local commands & Vercel**

- **Dev:** `cd _app && npm run dev` : starts the Next.js dev server (`next --turbo`).
- **Build:** `cd _app && npm run build` : builds the Next.js site.
- **Start (production):** `cd _app && npm run start` : starts the production server after build.
- **Lint:** `cd _app && npm run lint` : runs `next lint`.
- **Type generation:** `cd _app && npm run typegen` : runs `sanity typegen generate` (used before `dev`/`build`).

- **Vercel (deploying `_app`)**:
  - From the `_app` folder you can use the Vercel CLI or Vercel dashboard to deploy the Next.js site.
  - Deploy preview (local): `cd _app && vercel dev` — runs Vercel-like local environment.
  - Deploy to production with the Vercel CLI: `cd _app && vercel --prod`.
  - Alternatively, connect the `_app` folder in the Vercel dashboard and let Vercel build using `npm run build`.

### **studio (Sanity) — local commands & deploy**

- **Dev:** `cd studio && npm run dev` : starts Sanity Studio locally (`sanity dev`).
- **Build:** `cd studio && npm run build` : produces a static build of the studio for deployment.
- **Deploy:** `cd studio && npm run deploy` : uses `sanity deploy` to deploy the Studio (if you use Sanity hosting).
- **Extract types:** `cd studio && npm run extract-types` : runs `sanity schema extract` (used as a prebuild step).

## <br>

<br>

**Workspace notes**

- The monorepo root uses workspaces: both `studio` and `_app` are workspaces. The root `dev` script runs both workspaces in parallel.
- To run only one workspace use `npm run dev:next` or `npm run dev:studio` from the repo root, or change directory and run scripts directly in that workspace.

**Environment variables**

- Keep sensitive environment variables out of the repo. Use the Vercel dashboard or `.env.local` files (never commit them) for local development.
- Typical env vars you may need (example names):
  - `SANITY_PROJECT_ID` — Sanity project identifier
  - `SANITY_DATASET` — Sanity dataset (e.g., `production`)
  - `NEXT_PUBLIC_MAPS_API_KEY` — Google Maps API key for the frontend

**Development workflows**

- Start everything locally: `npm install && npm run dev` and visit the Next app (default: `http://localhost:3000`) and Sanity Studio (the Studio port is printed in the terminal by `sanity dev`).
- Build the frontend for production: `cd _app && npm run build` then `npm run start` to run the built app.
- Run type generation before building or dev (the `_app` package.json sets `predev` / `prebuild` to run `typegen`).

**Contributing**

- Follow the existing linting and formatting rules. The `_app` and `studio` packages include `prettier`/`eslint` setups. Run `cd _app && npm run lint` to check frontend lint issues.

**Useful commands summary**

- Root: `npm run dev` — run both Next.js and Sanity Studio in parallel.
- Next app only: `cd _app && npm run dev` | `npm run build` | `npm run start` | `npm run lint`.
- Studio only: `cd studio && npm run dev` | `npm run build` | `npm run deploy`.
- Vercel (from `_app`): `cd _app && vercel` or `cd _app && vercel --prod`.

## <br>

<br>

**Further reading**

- See `_app/README.md` or `studio/README.md` if present for package-specific notes.
