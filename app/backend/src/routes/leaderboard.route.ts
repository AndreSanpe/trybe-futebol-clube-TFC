import { Router } from 'express';
import { LeaderboardController } from '../controller';

const router = Router();

const leaderboardController = new LeaderboardController();

router.get('/leaderboard/home', leaderboardController.getAllMatchesHome);
router.get('/leaderboard/away', leaderboardController.getAllMatchesAway);

export default router;
