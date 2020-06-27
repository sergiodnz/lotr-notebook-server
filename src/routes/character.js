import { Router } from 'express';
import { getCharacters } from '../lotrapi/character';

const router = Router();

router.get('/', (req, res) => {
  const { page = '0', limit = '5' } = req.query;
  getCharacters(parseInt(page), parseInt(limit)).then(data => {
    res.send(data);
  });
});

export default router;
