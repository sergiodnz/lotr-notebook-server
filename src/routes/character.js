import { Router } from 'express';
import { getAll, getByName, getByID, getQuotes } from '../lotrapi/character';

const router = Router();

router.get('/', (req, res) => {
  const { page = '0', limit = '5' } = req.query;
  getAll(parseInt(page), parseInt(limit)).then(data => {
    res.send(data);
  });
});

router.get('/:id', (req, res) => {
  getByID(req.params.id).then(data => {
    res.send(data);
  });
});

router.get('/:id/quote', (req, res) => {
  getQuotes(req.params.id).then(data => {
    res.send(data);
  });
});

router.get('/name/:name', (req, res) => {
  const { name } = req.params;
  getByName(name).then(data => {
    res.send(data);
  });
});

export default router;
