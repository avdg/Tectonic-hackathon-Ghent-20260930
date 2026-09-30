import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { handleApiRequest } from './routes/api.js';

const port = Number(process.env.PORT) || 3000;
const indexFile = fileURLToPath(new URL('../public/index.html', import.meta.url));
const demoFile = fileURLToPath(new URL('../public/demo.html', import.meta.url));
const recorderFile = fileURLToPath(new URL('../public/recorder.html', import.meta.url));

const server = createServer(async (request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    response.writeHead(400).end('Bad request');
    return;
  }

  if (handleApiRequest(request, response, pathname)) return;

  const pageFile = pathname === '/' || pathname.startsWith('/app/')
    ? indexFile
    : pathname === '/demo' || pathname === '/demo.html'
      ? demoFile
      : pathname === '/recorder' || pathname === '/recorder.html'
        ? recorderFile
        : null;

  if (!pageFile) {
    response.writeHead(404).end('Not found');
    return;
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end('Method not allowed');
    return;
  }

  try {
    const content = await readFile(pageFile);
    response.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store'
    });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch (error) {
    console.error(error);
    response.writeHead(500).end('Internal server error');
  }
});

server.listen(port, () => {
  console.log(`Prototype server listening at http://localhost:${port}`);
});
