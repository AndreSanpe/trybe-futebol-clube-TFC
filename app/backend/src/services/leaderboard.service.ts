import Sequelize from '../database/models';
import HttpError from '../utils/HttpError';
import { queryBoardHome, queryBoardAway, queryBoard } from '../utils/queries';

const errorMessage = 'No teams has been found';

class LeaderboardService {
  // constructor(private model = new Sequelize()) {}
  public getAllMatches = async () => {
    const [boarder] = await Sequelize.query(queryBoard);

    if (!boarder) { throw new HttpError(401, errorMessage); }

    return boarder;
  };

  public getAllMatchesHome = async () => {
    const [boarderHome] = await Sequelize.query(queryBoardHome);

    if (!boarderHome) { throw new HttpError(401, errorMessage); }

    return boarderHome;
  };

  public getAllMatchesAway = async () => {
    const [boarderAway] = await Sequelize.query(queryBoardAway);

    if (!boarderAway) { throw new HttpError(401, errorMessage); }

    return boarderAway;
  };
}

export default LeaderboardService;
