# Product spec

Status: draft

This folder holds the product spec that we will agree on before creating wireframes.

## Challenge track

To decide: KBC or SD Worx.

## Target user

To define.

## Problem

To define.

## Proposed experience

The normal app lives at `/`. A separate guided voice demo lives at `/demo`. A user starts it with a “Show demo” button. Demo controls and narration stay in the demo page while the preview changes inside an iframe, so changing the demonstrated screen does not reset the voice controls. Each step has an app URL, including a fixture query parameter for its hardcoded data; the selected step is also reflected in the demo URL. Placeholder screens and narration are in place until the product flow is defined. The demo is set up to use browser speech with a configurable preferred voice, language, rate, and pitch, plus an optional custom audio endpoint integration point. Narration pauses when the browser tab becomes hidden and offers a clear way to resume when the user returns. The page estimates the full recording length conservatively from narration and voice rate before capture and recommends a target below 2:30. A three-dot menu opens a separate recording controller at `/recorder`; it records the demo monitor to a downloadable WebM file, while status, elapsed time, and Stop & download are also available in the demo menu. The controller stops eight seconds after narration completes, with no fixed recording cutoff. The final video must remain strictly below the three-minute hackathon maximum. Select the demo monitor and share system audio to capture browser speech synthesis.

## Primary user journey

1. The user selects “Show demo”.
2. The demo loads the first app page in the iframe and starts its narration.
3. The user can pause, resume, or stop the narration, and move through the demo.
4. If the user switches to another browser tab, narration pauses; on return, the demo offers a clear resume action.

## Prototype scope

### In scope

To define.

### Out of scope

To define.

## Wireframe screen list

To define after agreeing on the spec.

## Technical constraints

- The prototype needs a web server.
- Most content is static, with a small amount of controller logic.
- Use Node.js 24 or newer and plain JavaScript, organized into clear modules.
- Prefer Node's built-in APIs; add an npm dependency only when it provides a clear benefit beyond a small amount of code.
- The starter uses Node's built-in HTTP server: one static HTML page plus small API routes/controllers in `src/`.
- Do not build a general MIME resolver into this starter. The team already has a reusable MIME resolver in its more advanced server; drop it in if/when the prototype needs to serve designer assets.
- The team designer may provide external design files; preserve those files outside the code repo unless the team decides to include them.

## Security deliverable

- The Aikido AI Code Audit is worth 10% of the score; its before-and-after evidence is a submission requirement.
- Aikido flagged `raw-body` 3.0.2 through Express. Express was removed because this static prototype does not need a body-parsing dependency. A fresh Aikido scan is still required to confirm the finding is resolved and capture the evidence.

## Open questions and assumptions

- Which challenge track are we building for?
- What are the app pages and features the demo should cover?
- What request and response format does the custom voice endpoint use?
- Assumption: the app pages can be loaded in an iframe on the demo page's origin, or the server can be configured to allow embedding them.
