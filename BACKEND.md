# Contact backend

Small JSON-backed API for the portfolio contact form, plus an admin dashboard.

## Endpoints

| Method | Route | Purpose |
| --- | --- | --- |
| `POST` | `/api/contact` | Save a submission `{ name, email, message }` |
| `GET` | `/api/contact` | List submissions, newest first |
| `DELETE` | `/api/contact?id=<id>` | Delete one submission |

Responses are JSON. Validation errors return `400` with `{ "error": "..." }`.

## Local development

```bash
npm run dev
```

`vite.config.js` mounts the same handler at `/api/contact`, so no extra process
or Vercel CLI is needed. Submissions are written to `data/contacts.json` (ignored
by git).

Dashboard: <http://localhost:5173/xyzdashboard>

## Deployment

`vercel.json` rewrites `/xyzdashboard` to the SPA and Vercel auto-detects
`api/contact.js` as a serverless function.

> **Persistence caveat:** Vercel's filesystem is read-only, so the function writes
> to `/tmp/contacts.json`. That survives only for the life of a warm instance —
> data disappears on cold starts and redeploys. Good enough to demo the flow, but
> for durable storage swap `server/store.js` for MongoDB Atlas, Vercel KV or
> Upstash Redis before relying on it in production.
