import { NextFunction, Request, Response } from 'express';
import { TeamService } from '../services';

class TeamsController {
  constructor(private teamService = new TeamService()) { }

  public getAllTeams = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allTeams = await this.teamService.getAll();
      return res.status(200).json(allTeams);
    } catch (error) {
      return next(error);
    }
  };

  public getOneTeam = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const oneTeam = await this.teamService.getOneTeam(Number(id));
      return res.status(200).json(oneTeam);
    } catch (error) {
      return next(error);
    }
  };
}

export default TeamsController;
