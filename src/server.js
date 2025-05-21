import express from 'express';

import routes from './routes.js';

import cors from 'cors'

const app = express();


app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json());

// usando o Router
app.use(routes)

const PORT = process.env.PORT_DB || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

