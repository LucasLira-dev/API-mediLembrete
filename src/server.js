import express from 'express';
import routes from './routes.js';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API está online');
});

app.use((req, res, next) => {
  console.log('Request from origin:', req.headers.origin);
  next();
});

// usando o Router
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});