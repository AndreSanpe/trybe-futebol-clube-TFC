import Sequelize from '../database/models';
import HttpError from '../utils/HttpError';

const errorMessage = 'No teams has been found';

const query = `SELECT team_name as name, 

(SELECT SUM(CASE 
WHEN (home_team_goals > away_team_goals) THEN 3
WHEN (home_team_goals < away_team_goals) THEN 0
ELSE 1 
            END))
as totalPoints,
            

(SELECT COUNT(home_team)) 
as totalGames,

(SELECT SUM(CASE 
WHEN (home_team_goals > away_team_goals) THEN 1
                ELSE 0
            END)) 
as totalVictories,
            
(SELECT SUM(CASE 
WHEN (home_team_goals = away_team_goals) THEN 1
                ELSE 0
            END))
as totalDraws,
            
(SELECT SUM(CASE 
WHEN (home_team_goals < away_team_goals) THEN 1
                ELSE 0
            END))
as totalLosses,
            
SUM(home_team_goals) as goalsFavor,

SUM(away_team_goals) as goalsOwn,

(SELECT SUM( 
SUM(home_team_goals)-SUM(away_team_goals)
)) 
as goalsBalance,
            
((ROUND
(((SELECT SUM(CASE 
WHEN (home_team_goals < away_team_goals) THEN 0
WHEN (home_team_goals > away_team_goals) THEN 3
ELSE 1 
            END))
            /
            ((SELECT COUNT(home_team)*3)))*100,2))
            
            ) as efficiency
            
            
FROM TRYBE_FUTEBOL_CLUBE.matches as m
LEFT JOIN TRYBE_FUTEBOL_CLUBE.teams as t ON m.home_team = t.id WHERE in_progress = 0

GROUP BY t.id

ORDER BY totalPoints DESC, goalsBalance DESC, totalVictories DESC, goalsFavor DESC, goalsOwn DESC;`;

class LeaderboardService {
  // constructor(private model = new Sequelize()) {}
  public getAllMatches = async () => {
    const [teams] = await Sequelize.query(query);

    if (!teams) { throw new HttpError(401, errorMessage); }

    return teams;
  };
}

export default LeaderboardService;
