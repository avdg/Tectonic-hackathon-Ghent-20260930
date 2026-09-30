import express from 'express';
import { fileURLToPath } from 'node:url';
import apiRouter from './routes/api.js';

const app = express();
const port = Number(process.env.PORT) || 3000;
const publicDirectory = fileURLToPath(new URL('../public/', import.meta.url));

app.use(express.json({ limit: '100kb' }));
app.use('/api', apiRouter);
app.use(express.static(publicDirectory));
app.use('/api', (_request, response) => {
  response.status(404).json({ error: 'API route not found' });
});

app.listen(port, () => {
  console.log(`Prototype server listening at http://localhost:${port}`);
});
