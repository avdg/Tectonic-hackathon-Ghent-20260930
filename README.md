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

## App and guided demo

- The normal app is at <http://localhost:3000/>.
- The separate guided demo is at <http://localhost:3000/demo>.
- The recording controller opens in a separate window at <http://localhost:3000/recorder>, so it can sit on another screen.
- The demo's iframe loads each app screen by URL. Its `step` query parameter selects a demo step, and each screen URL's `fixture` parameter selects its hardcoded sample data.
- The demo currently uses placeholder screens and narration. Replace these after the product situation and wireframes are agreed.
- The demo conservatively estimates narration and recording duration before recording. Keep the submitted video strictly under three minutes; target an estimate below 2:30 to leave room for timing variation. Recording itself has no forced duration cap.

### Record the hackathon video

1. Open <http://localhost:3000/demo> in a current version of Chrome or Edge.
2. Click the three-dot menu at the top-right of the app preview, then **Open recording controls**. Move the new window to another screen if available.
3. On the demo page, open the three-dot menu and click **Start recording**. In the browser's sharing picker, select the screen showing the demo and enable system audio; tab audio may not include browser speech synthesis. The app preview fills the browser viewport while recording. A visible 3-second countdown runs before recording starts, so it is not in the video; the narration begins automatically just after recording starts. The separate window is for monitoring/stopping, not starting capture.
4. Leave the demo running; after the countdown, narration and screen changes start automatically. The recording status and elapsed time are also available under the demo page's three-dot menu. Capture stops eight seconds after the narration completes.
5. To finish early, click **Stop & download** in either the recording window or the demo page's three-dot menu. Review the WebM to check that the narration was captured and the video is under three minutes.
6. Upload the finished video to YouTube, then add its link to this README and the Builderbase submission.

The browser requires a screen-sharing choice for every recording. Choose the demo tab, not the separate recording-control window.

## Structure

- `public/` — the starter HTML page.
- `src/routes/` — HTTP route definitions.
- `src/controllers/` — request handling and small pieces of app logic.
- `spec/` — product decisions to settle before drawing the wireframes.

The built-in server serves `public/index.html` and dispatches API routes through `src/routes/` to their controllers.

The page is only a functional shell; replace it with the agreed experience after the spec and wireframes are ready.
