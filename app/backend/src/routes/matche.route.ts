import { Router } from 'express';
import { MatcheController } from '../controller';

const router = Router();

const matcheController = new MatcheController();

router.get('/matches', matcheController.getFilterTrueMatches);

router.get('/matches', matcheController.getFilterFalseMatches);

router.get('/matches', matcheController.getAllMatches);

export default router;
