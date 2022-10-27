import Matche from '../database/models/Matche';
import Team from '../database/models/Team';
import HttpError from '../utils/HttpError';

const errorMessage = 'No matche has been found';

class MatcheService {
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
}

export default MatcheService;
