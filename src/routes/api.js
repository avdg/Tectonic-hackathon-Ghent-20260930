import { getHealth } from '../controllers/healthController.js';

export function handleApiRequest(request, response, pathname) {
  if (request.method === 'GET' && pathname === '/api/health') {
    getHealth(response);
    return true;
  }

  if (pathname.startsWith('/api/')) {
    response.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify({ error: 'API route not found' }));
    return true;
  }

  return false;
}
