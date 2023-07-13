import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';
import express from 'express';
import db from '../src/database/db';
import cors from 'cors';
import routes from './routers/index'

db.on("error", console.log.bind(console, "Error connecting to Mongo"));
db.once("open", () => {
  console.log("Connected successfully!");
});

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/", routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

