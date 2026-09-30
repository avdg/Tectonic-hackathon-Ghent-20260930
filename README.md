# Hackathon prototype

A small Node.js web app for a mostly static prototype with a little controller logic.

## Run locally

Requires Node.js 18 or newer.

```sh
npm install
npm run dev
```

Open <http://localhost:3000>. The starter page checks `GET /api/health` to confirm the server is responding.

Use `npm start` to run without file watching. Set `PORT` to change the port.

## Structure

- `public/` — static HTML, CSS, and browser JavaScript.
- `src/routes/` — HTTP route definitions.
- `src/controllers/` — request handling and small pieces of app logic.
- `spec/` — product decisions to settle before drawing the wireframes.

The page is only a functional shell; replace it with the agreed experience after the spec and wireframes are ready.
