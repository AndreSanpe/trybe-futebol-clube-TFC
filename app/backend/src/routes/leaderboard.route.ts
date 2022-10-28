import { Router } from 'express';
import { LeaderboardController } from '../controller';

const router = Router();

const leaderboardController = new LeaderboardController();

router.get('/leaderboard/home', leaderboardController.getAllMatches);

export default router;
