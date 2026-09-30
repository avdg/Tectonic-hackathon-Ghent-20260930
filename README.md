# Hackathon prototype

A small Node.js web app for a mostly static prototype with a little controller logic. It uses Node's built-in HTTP server, so it has no runtime package dependencies. The starter serves one HTML page and a health endpoint, without a generic MIME processor or dynamic file paths.

## Run locally

Requires Node.js 24 or newer.

```sh
npm install
npm run dev
```

Open <http://localhost:3000>. The starter page checks `GET /api/health` to confirm the server is responding.

Use `npm start` to run without file watching. Set `PORT` to change the port.

## Structure

- `public/` — the starter HTML page.
- `src/routes/` — HTTP route definitions.
- `src/controllers/` — request handling and small pieces of app logic.
- `spec/` — product decisions to settle before drawing the wireframes.

The built-in server serves `public/index.html` and dispatches API routes through `src/routes/` to their controllers.

The page is only a functional shell; replace it with the agreed experience after the spec and wireframes are ready.
