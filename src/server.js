import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = 5000;
const RIDDLE = `Listening at the Gates of Moria (http://localhost:${PORT}). Speak your token, and enter.`;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(RIDDLE));
