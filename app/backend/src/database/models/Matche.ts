import { BOOLEAN, INTEGER, Model } from 'sequelize';
import db from '.';
import Team from './Team';

class Matche extends Model {
  id!: number;
  homeTeam!: string;
  homeTeamGoal!: string;
  awayTeam!: string;
  awayTeamGoals!: string;
  inProgress:number;
  createdAt: Date;
  updatedAt: Date;
}

Matche.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    homeTeam: {
      type: INTEGER,
      allowNull: false,

    },
    homeTeamGoals: {
      type: INTEGER,
      allowNull: false,

    },
    awayTeam: {
      type: INTEGER,
      allowNull: false,

    },
    awayTeamGoals: {
      type: INTEGER,
      allowNull: false,

    },
    inProgress: {
      allowNull: false,
      type: BOOLEAN,
    },

  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'matches',
    timestamps: false,
  },
);

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */
Team.hasMany(Matche, { foreignKey: 'homeTeam', as: 'teamHome' });
Team.hasMany(Matche, { foreignKey: 'awayTeam', as: 'teamAway' });

Matche.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Matche.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

// OtherModel.belongsTo(User, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(User, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// User.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// User.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Matche;
