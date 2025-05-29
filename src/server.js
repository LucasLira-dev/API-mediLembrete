import express from 'express';

import routes from './routes.js';

import cors from 'cors'

import 'dotenv/config';

const app = express();


console.log('FRONTEND_URL:', process.env.FRONTEND_URL);

app.use(cors({
    origin: process.env.FRONTEND_URL ,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json());

// usando o Router
app.use(routes)

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('API MediLembrete está rodando!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

