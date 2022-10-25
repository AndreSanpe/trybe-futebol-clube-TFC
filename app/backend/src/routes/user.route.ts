import { Router } from 'express';

const router = Router();

router.post('/login', (_req, res) => {
  res.sendStatus(201);
});

export default router;
