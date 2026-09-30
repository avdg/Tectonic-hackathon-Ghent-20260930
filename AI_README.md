# AI README

## End-of-hackathon deliverables

- Build the project during the official hackathon time slot.
- Commit and push the finished code to this GitHub repository before the final submission. Keep the repository public and accessible until judging is complete.
- Include a short README explaining the project, how to run it, and anything unfinished.
- Create a YouTube demo video under 3 minutes and include its link in the repository. The submission guide also requires the demo video link in Builderbase.
- Run the required Aikido AI Code Audit, fix and mark issues resolved, and include before-and-after screenshots of the Aikido platform in the submission.
- Submit one project per team through Builderbase with the project description, demo video link, GitHub repository link, and Aikido screenshots.
- Treat the final submission as final: do not change the code or submission after submitting.
- Never commit passwords, API keys, or confidential data.

## Hackathon challenges

There are two challenge tracks. Review [CHALLENGES.md](CHALLENGES.md) and confirm which one we are building for before choosing a solution direction. The full participants guide is kept outside this code repository in the project workspace; its actionable submission notes are summarized in [HACKATHON_GUIDE.md](HACKATHON_GUIDE.md).

## Guided demo implementation

The normal app and the narrated demo are separate pages. Preserve this split:

- `/` and `/app/...` are the normal app. App screen state may be represented by the path and query string.
- `/demo` is the demo controller page. Keep the iframe, narration, and playback controls here, outside the embedded app screen, so changing the iframe URL does not reset the voice assistant.
- The Node server routes `/app/...` to the normal app page and `/demo` to `public/demo.html`.

When the user provides the situation, design, wireframes, or feature list, implement the walkthrough by editing the `demoSteps` array in `public/demo.html`. Every step should have a stable `id`, a human-readable `title`, an app `url`, and `narration`. The app URL should include query parameters that select its hardcoded fixture data, for example `/app/feature?fixture=customer-summary`. Use those same URLs for direct app links and for the demo iframe; do not duplicate screen markup inside the demo page. Keep the demo's `?step=<id>` URL state working so a step can be opened directly.

Replace the generic `/app/overview`, `/app/feature`, and `/app/outcome` placeholders and fixture labels in `public/index.html` with the designed app screens and deterministic hardcoded sample data. Keep fixtures clearly synthetic. Update the `/app/...` route handling in `src/server.js` if the designed app needs additional paths, while keeping the explicit `/demo` route separate.

Browser speech settings live in `VOICE_CONFIG` in `public/demo.html` (preferred voice, language, rate, and pitch). Keep the configured voice and fallback behavior unless the user changes them. `VOICE_ENDPOINT` is an optional integration point: do not guess the endpoint URL, payload, authentication, or response format. Use the contract supplied by the user, and keep the browser voice fallback available. Preserve pause/resume/stop behavior and automatic pause when the browser tab becomes hidden.

The demo includes a separate recording controller at `/recorder`. Keep access to it behind the collapsed three-dot menu at the top-right of the app preview; open it in a separate popup window so the team can move the controls to another screen. The demo view should show only the dots, never the recording controls or labels. Start `getDisplayMedia()` only after the user clicks Start recording inside the demo page's collapsed menu; the browser permission picker must be triggered by that demo-page action. Once capture starts, show a visible three-second countdown, then automatically start the narrated walkthrough so the welcome line is included. The demo page owns the captured stream and `MediaRecorder`; the popup is a same-origin remote control for status and Stop. Do not pass a live `MediaStream` through `postMessage`. Mirror recording status, elapsed time, and a Stop & download action inside the demo's collapsed menu. Instruct them to select the screen to record and enable system audio, since browser speech synthesis may not be present in tab audio. Keep the app preview iframe scripts enabled so the app routes work; it is same-origin project content. The hackathon's three-minute video maximum is strict: estimate runtime conservatively from narration text and speech rate before recording, including startup and the 8-second ending; warn and recommend shortening the script at 2:30 or above so there is room for variation. Do not force-stop recording at a fixed duration. Stop and download eight seconds after narration completes to leave a short visual tail. Keep manual Stop & download available in both places. The resulting WebM can be uploaded directly or converted/edited for the team's YouTube submission.

Before considering the demo ready, ensure every step URL loads the intended fixture in the iframe, direct `?step=` links select the matching step, and narration text matches the screen being shown. Do not choose a challenge-specific product flow while the challenge and product situation remain undecided.
