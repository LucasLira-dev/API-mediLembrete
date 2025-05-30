import express from 'express';

import routes from './routes.js';

import cors from 'cors'

import 'dotenv/config';

const app = express();


app.use(cors({
    origin: 'https://medi-lembrete-zkcv-6t768zv2p-lucaslira-devs-projects.vercel.app'
    , 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json());


app.get("/", (req, res) => {
  res.send("API está online");
});


// usando o Router
app.use(routes)

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

