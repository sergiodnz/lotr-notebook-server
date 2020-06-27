import { Router } from 'express';
import * as API from '../lotrapi/quote';

const router = Router();

router.get('/:id', (req, res) => {
  API.getByID(req.params.id).then(data => res.send(data));
});

export default router;
