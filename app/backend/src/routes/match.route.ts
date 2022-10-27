import { Router } from 'express';
import validateToken from '../middleware/validateToken';
// import validateTokenAdd from '../middleware/validateTokenAdd';
import { MatchController } from '../controller';

const router = Router();

const matchController = new MatchController();

router.get('/matches', matchController.getFilterTrueMatches);

router.get('/matches', matchController.getFilterFalseMatches);

router.get('/matches', matchController.getAllMatches);

router.post('/matches', validateToken, matchController.addMatches);

router.patch('/matches/:id/finish', validateToken, matchController.updateMatches);

export default router;
