import express, { json } from "express";
import cors from 'cors';
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

import authRouter from './src/routes/authRouter'
import dataRouter from './src/routes/dataRouter'

dotenv.config()

const app = express();
app.use(cors());
app.use(json());

const mongoClient = new MongoClient(process.env.MONGO_URI);
await mongoClient.connect();

app.use(authRouter)
app.use(dataRouter)


