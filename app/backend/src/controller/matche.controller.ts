import { NextFunction, Request, Response } from 'express';
import { MatcheService } from '../services';

class MatcheController {
  constructor(private matcheService = new MatcheService()) { }

  public getFilterTrueMatches = async (req: Request, res: Response, next: NextFunction) => {
    const { inProgress } = req.query;

    const validateInprogress = inProgress === 'true';
    // console.log(validateInprogress);

    if (!validateInprogress) {
      return next();
    }
    try {
      const filterTrueMatches = await this.matcheService.getFilterMatches(validateInprogress);
      return res.status(200).json(filterTrueMatches);
    } catch (error) {
      return next(error);
    }
  };

  public getFilterFalseMatches = async (req: Request, res: Response, next: NextFunction) => {
    const { inProgress } = req.query;

    const validateInprogress = inProgress === 'false';
    console.log(validateInprogress);

    if (!validateInprogress) {
      return next();
    }
    try {
      const filterTrueMatches = await this.matcheService.getFilterMatches(false);
      return res.status(200).json(filterTrueMatches);
    } catch (error) {
      return next(error);
    }
  };

  public getAllMatches = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allMatches = await this.matcheService.getAllMatches();
      return res.status(200).json(allMatches);
    } catch (error) {
      return next(error);
    }
  };
}

export default MatcheController;
