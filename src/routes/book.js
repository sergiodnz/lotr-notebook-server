import { Router } from 'express';
import * as API from '../lotrapi/book';

const router = new Router();

router.get('/', (req, res) => {
  API.getAll().then(data => {
    res.send(data);
  });
});

router.get('/:id', (req, res) => {});

export default router;
