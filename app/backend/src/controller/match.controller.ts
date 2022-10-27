import { NextFunction, Request, Response } from 'express';
import { MatchService } from '../services';

class MatcheController {
  constructor(private matcheService = new MatchService()) { }

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

  public addMatches = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const addMatches = await this.matcheService.addMatches(req.body);
      return res.status(201).json(addMatches);
    } catch (error) {
      return next(error);
    }
  };

  public updateMatches = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      await this.matcheService.updateMatches(Number(id));
      return res.status(200).json({ message: 'Fineshed' });
    } catch (error) {
      return next(error);
    }
  };
}

export default MatcheController;
