<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Single Next.js 16 web app (App Router, React 19, Tailwind v4). Dependencies are refreshed automatically via the startup update script (`npm install`); no env vars, databases, or external services are required.

Scripts (see `package.json`): `npm run dev` (Turbopack dev server on http://localhost:3000), `npm run build`, `npm start`, `npm run lint`.

Notes:
- `npm run lint` invokes `eslint` with no arguments; the flat config in `eslint.config.mjs` handles file selection.
- Edit `app/page.tsx` to see Fast Refresh (hot reload) update the running dev server automatically.
