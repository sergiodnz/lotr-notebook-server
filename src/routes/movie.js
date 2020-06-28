import { Router } from 'express';
import * as API from '../lotrapi/movie';

const router = new Router();

router.get('/', (req, res) => {
  API.getAll().then(data => res.send(data));
});

router.get('/:id', (req, res) => {
  API.getByID(req.params.id).then(data => res.send(data));
});

export default router;
