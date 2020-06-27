import { Router } from 'express';
import * as API from '../lotrapi/character';

const router = Router();

router.get('/', (req, res) => {
  const { page = '0', limit = '5' } = req.query;
  API.getAll(parseInt(page), parseInt(limit)).then(data => {
    res.send(data);
  });
});

router.get('/:id', (req, res) => {
  API.getByID(req.params.id).then(data => {
    res.send(data);
  });
});

router.get('/:id/quote', (req, res) => {
  API.getQuotes(req.params.id).then(data => {
    res.send(data);
  });
});

router.get('/name/:name', (req, res) => {
  const { name } = req.params;
  API.getByName(name).then(data => {
    res.send(data);
  });
});

export default router;
