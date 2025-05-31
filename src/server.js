import express from 'express';

import routes from './routes.js';

import cors from 'cors'

import 'dotenv/config';

const app = express()


app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
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

process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});