import { NextFunction, Request, Response } from 'express';
import { LeaderboardService } from '../services';

class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) { }

  public getAllMatches = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const leaderboard = await this.leaderboardService.getAllMatches();
      return res.status(200).json(leaderboard);
    } catch (error) {
      return next(error);
    }
  };
}

export default LeaderboardController;
