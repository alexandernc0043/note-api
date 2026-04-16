import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import errorHandler from './middleware/errorHandler.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

app.use(errorHandler);

export default app;
