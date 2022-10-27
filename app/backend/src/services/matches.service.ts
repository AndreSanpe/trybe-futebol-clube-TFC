import Matche from '../database/models/Matche';
import Team from '../database/models/Team';
import HttpError from '../utils/HttpError';
import IMache from '../interfaces/IMatch';

const errorMessage = 'No matche has been found';

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
    console.log(validate);

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
    const inProgress = true;
    const matches = await Matche.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress,
    });

    if (!matches) { throw new HttpError(401, 'No matche has been created'); }

    return matches;
  };

  public updateMatches = async (id: number) => {
    const matches = await Matche.update({ inProgress: false }, { where: { id } });

    if (!matches) { throw new HttpError(401, 'No matche has been created'); }

    return matches;
  };
}

export default MatchService;
