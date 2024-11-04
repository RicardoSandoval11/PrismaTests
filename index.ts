import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();

app.use(express.json({
    limit: '10kb'
}));

app.use(cors({
    origin: process.env.FRONTEND_SERVER
}));

const applicationPort : number = Number(process.env.APPLICATION_PORT) || 3000;

app.listen(applicationPort, () => {
    console.log(`Application running on port ${applicationPort}`);
})

