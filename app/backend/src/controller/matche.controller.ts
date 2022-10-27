import { NextFunction, Request, Response } from 'express';
import { MatcheService } from '../services';

class MatcheController {
  constructor(private matcheService = new MatcheService()) { }

  public getAllMatches = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allMatches = await this.matcheService.getAllMatches();
      return res.status(200).json(allMatches);
    } catch (error) {
      return next(error);
    }
  };

  // public getOneTeam = async (req: Request, res: Response, next: NextFunction) => {
  //   const { id } = req.params;
  //   try {
  //     const oneTeam = await this.matcheService.getOneTeam(Number(id));
  //     return res.status(200).json(oneTeam);
  //   } catch (error) {
  //     return next(error);
  //   }
  // };
}

export default MatcheController;
