# FullHeart Site

This repository now contains a Next.js intake landing page for FullHeart Limited LLC.

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm start`

## Intake Form

The form posts to `/api/intake`, which stores submissions in `data/intake-submissions.json` during local or Node-based hosting.

For a future production email/webhook integration, replace the persistence logic in `app/api/intake/route.ts`.
