import { NextFunction, Request, Response } from 'express';
import { MatchService } from '../services';

class MatcheController {
  constructor(private matcheService = new MatchService()) { }

  public getFilterTrueMatches = async (req: Request, res: Response, next: NextFunction) => {
    const { inProgress } = req.query;

    const validateInprogress = inProgress === 'true';

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
    const { homeTeam, awayTeam } = req.body;

    if (homeTeam === awayTeam) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
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

  public updateGoals = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const payload = { homeTeamGoals, awayTeamGoals, id };

    try {
      await this.matcheService.updateGoals(payload);
      return res.status(200).json({ message: 'Goalll!!!' });
    } catch (error) {
      return next(error);
    }
  };
}

export default MatcheController;
