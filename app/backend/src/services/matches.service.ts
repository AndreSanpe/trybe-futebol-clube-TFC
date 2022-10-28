import Matche from '../database/models/Matche';
import Team from '../database/models/Team';
import HttpError from '../utils/HttpError';
import IMache from '../interfaces/IMatch';

const errorMessage = 'No matche has been found';

const errorToken = 'Token must be a valid token';

class MatchService {
  public getAllMatches = async () => {
    const matches = await Matche.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    if (!matches) { throw new HttpError(401, errorMessage); }

    return matches;
  };

  public getFilterMatches = async (validate: boolean) => {
    const matches = await Matche.findAll({ where: { inProgress: validate },
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    if (!matches) { throw new HttpError(401, errorMessage); }

    return matches;
  };

  public addMatches = async ({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }: IMache) => {
    const searchHomeTeam = await Team.findOne({ where: { id: homeTeam } });
    const searchAwayTeam = await Team.findOne({ where: { id: awayTeam } });

    if (!searchHomeTeam || !searchAwayTeam) {
      throw new HttpError(404, 'There is no team with such id!');
    }

    const matches = await Matche.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });

    if (!matches) { throw new HttpError(401, errorToken); }

    return matches;
  };

  public updateMatches = async (id: number) => {
    const matches = await Matche.update({ inProgress: false }, { where: { id } });

    if (!matches) { throw new HttpError(401, errorToken); }

    return matches;
  };

  public updateGoals = async (payload: any) => {
    const { homeTeamGoals: homeGoals, awayTeamGoals: awayGoals, id } = payload;

    const matches = await Matche.update(
      { homeTeamGoals: homeGoals, awayTeamGoals: awayGoals },
      { where: { id } },
    );

    if (!matches) { throw new HttpError(401, errorToken); }

    return matches;
  };
}

export default MatchService;
