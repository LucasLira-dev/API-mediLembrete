import express from 'express';

import routes from './routes.js';

import cors from 'cors'

import 'dotenv/config';

const app = express()

const allowedOrigins = [
  'http://localhost:3000',
  'https://medi-lembrete-zkcv-6t768zv2p-lucaslira-devs-projects.vercel.app'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // permite requisições sem origem (ex: Postman)

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // NÃO lança erro — apenas nega sem crashar
    return callback(null, false);
  },
  credentials: true
}));


app.use(express.json());


app.use((req, res, next) => {
  console.log('Request from origin:', req.headers.origin);
  next();
});

// usando o Router
app.use(routes)

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

