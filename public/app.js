const status = document.querySelector('#server-status');

try {
  const response = await fetch('/api/health');
  if (!response.ok) throw new Error('Server check failed');

  const health = await response.json();
  status.textContent = health.status === 'ok' ? 'Server is running' : 'Server status unavailable';
} catch {
  status.textContent = 'Could not reach the server';
}
