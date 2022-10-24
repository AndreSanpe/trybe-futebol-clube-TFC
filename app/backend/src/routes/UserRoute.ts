import { Router } from 'express';

const router = Router();

router.post('/login', (_req, res) => {
  res.send('ok').status(201);
});

export default router;
