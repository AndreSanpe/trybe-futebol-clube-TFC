import { Router } from 'express';
import validateToken from '../middleware/validateToken';
import { MatcheController } from '../controller';

const router = Router();

const matcheController = new MatcheController();

router.get('/matches', matcheController.getFilterTrueMatches);

router.get('/matches', matcheController.getFilterFalseMatches);

router.get('/matches', matcheController.getAllMatches);

router.post('/matches', validateToken, matcheController.addMatches);

router.patch('/matches/:id/finish', validateToken, matcheController.addMatches);

export default router;
