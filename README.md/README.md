/*
# Viziopath Backend

## Quick Start
1. Clone repository & install
   ```bash
   npm i
   cp .env.example .env
   ```
2. Fill `.env` with your credentials (MongoDB, SMTP, JWT).
3. Run locally:
   ```bash
   npm run dev
   ```
4. Open Swagger docs: `http://localhost:5000/api/docs`.
5. Deploy easily to Render/Railway/Fly.io. Add the same `.env`.

## API Overview
- `POST /api/auth/register` – create admin/editor
- `POST /api/auth/login` – returns `{ token, user }`
- `GET  /api/projects` – public list
- `POST /api/projects` – admin/editor create
- `PUT  /api/projects/:id` – admin/editor update
- `DELETE /api/projects/:id` – admin delete
- `GET  /api/programs` – public internships/courses
- `POST /api/programs` – admin/editor create
- `GET  /api/posts` – blog/news list
- `GET  /api/posts/:slug` – view post by slug
- `POST /api/posts` – admin/editor create
- `POST /api/contact` – save inquiry + email notification

## Frontend Integration (examples)
```js
// Fetch programs
fetch('https://<your-domain>/api/programs').then(r=>r.json())

// Submit contact form
await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify({ name, email, message }) })
```

## Notes
- CORS is set from `CLIENT_ORIGIN` (comma-separated for multiple domains).
- Rate limiting protects `/api/*` and stricter on `/api/contact`.
- Swap MongoDB for PostgreSQL/MySQL later with Prisma if required.
*/
