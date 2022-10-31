const queryBoardHome = `SELECT team_name as name, 

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

const queryBoardAway = `SELECT team_name as name, 

(SELECT SUM(CASE 
WHEN (away_team_goals > home_team_goals) THEN 3
WHEN (away_team_goals < home_team_goals) THEN 0
ELSE 1 
            END))
as totalPoints,
            

(SELECT COUNT(away_team)) 
as totalGames,

(SELECT SUM(CASE 
WHEN (away_team_goals > home_team_goals) THEN 1
                ELSE 0
            END)) 
as totalVictories,
            
(SELECT SUM(CASE 
WHEN (away_team_goals = home_team_goals) THEN 1
                ELSE 0
            END))
as totalDraws,
            
(SELECT SUM(CASE 
WHEN (away_team_goals < home_team_goals) THEN 1
                ELSE 0
            END))
as totalLosses,
            
SUM(away_team_goals) as goalsFavor,

SUM(home_team_goals) as goalsOwn,

(SELECT SUM( 
SUM(away_team_goals)-SUM(home_team_goals)
)) 
as goalsBalance,
            
((ROUND
(((SELECT SUM(CASE 
WHEN (away_team_goals < home_team_goals) THEN 0
WHEN (away_team_goals > home_team_goals) THEN 3
ELSE 1 
            END))
            /
            ((SELECT COUNT(away_team)*3)))*100,2))
            
            ) as efficiency
            
            
FROM TRYBE_FUTEBOL_CLUBE.matches as m
LEFT JOIN TRYBE_FUTEBOL_CLUBE.teams as t ON m.away_team = t.id WHERE in_progress = 0

GROUP BY t.id

ORDER BY totalPoints DESC, goalsBalance DESC, totalVictories DESC, goalsFavor DESC, goalsOwn DESC;`;
const queryBoard = `SELECT 

a.name as name, 
a.totalPoints + b.totalPoints AS totalPoints,
a.totalGames + b.totalGames AS totalGames,
a.totalVictories + b.totalVictories AS totalVictories,
a.totalDraws + b.totalDraws AS totalDraws,
a.totalLosses + b.totalLosses AS totalLosses,
a.goalsFavor + b.goalsFavor AS goalsFavor,
a.goalsOwn + b.goalsOwn AS goalsOwn,
a.goalsBalance + b.goalsBalance AS goalsBalance,
ROUND((a.totalPoints + b.totalPoints)/
((a.totalGames + b.totalGames)*3)*100,2) AS efficiency

from (SELECT team_name as name, 

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
LEFT JOIN TRYBE_FUTEBOL_CLUBE.teams as t ON m.home_team = t.id

GROUP BY t.id) as a
INNER JOIN 
(SELECT team_name as name, 

(SELECT SUM(CASE 
WHEN (away_team_goals > home_team_goals) THEN 3
WHEN (away_team_goals < home_team_goals) THEN 0
ELSE 1 
            END))
as totalPoints,
            

(SELECT COUNT(away_team)) 
as totalGames,

(SELECT SUM(CASE 
WHEN (away_team_goals > home_team_goals) THEN 1
                ELSE 0
            END)) 
as totalVictories,
            
(SELECT SUM(CASE 
WHEN (away_team_goals = home_team_goals) THEN 1
                ELSE 0
            END))
as totalDraws,
            
(SELECT SUM(CASE 
WHEN (away_team_goals < home_team_goals) THEN 1
                ELSE 0
            END))
as totalLosses,
            
SUM(away_team_goals) as goalsFavor,

SUM(home_team_goals) as goalsOwn,

(SELECT SUM( 
SUM(away_team_goals)-SUM(home_team_goals)
)) 
as goalsBalance,
            
((ROUND
(((SELECT SUM(CASE 
WHEN (away_team_goals < home_team_goals) THEN 0
WHEN (away_team_goals > home_team_goals) THEN 3
ELSE 1 
            END))
            /
            ((SELECT COUNT(away_team)*3)))*100,2))
            
            ) as efficiency
            
            
FROM TRYBE_FUTEBOL_CLUBE.matches as m
LEFT JOIN TRYBE_FUTEBOL_CLUBE.teams as t ON m.away_team = t.id WHERE in_progress = 0

GROUP BY t.id) as b
on a.name = b.name
ORDER BY totalPoints DESC, goalsBalance DESC, totalVictories DESC, goalsFavor DESC, goalsOwn DESC;`;

export { queryBoardHome, queryBoardAway, queryBoard };
