import Team from '../database/models/Team';
import HttpError from '../utils/HttpError';

const errorMessage = 'No teams has been found';

class TeamService {
  public getAll = async () => {
    const teams = await Team.findAll();

    if (!teams) { throw new HttpError(401, errorMessage); }

    return teams;
  };
}

export default TeamService;
