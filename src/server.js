import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { authMiddleware } from './config/axios';
import routes from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authMiddleware);

app.use('/character', routes.character);
app.use('/quote', routes.quote);
app.use('/book', routes.book);
app.use('/movie', routes.movie);

const PORT = 5000;
const LISTENING_MSG = `In a hole in the ground there lived a Hobbit --> http://localhost:${PORT}`;

app.listen(PORT, () => console.log(LISTENING_MSG));
