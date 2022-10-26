import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';

class Team extends Model {
  id!: number;
  teamName!: string;
}

Team.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    teamName: {
      type: STRING,
      allowNull: false,

    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'teams',
    timestamps: false,
  },
);

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// Matche.belongsTo(Team, { foreignKey: 'id', as: 'homeTeam' });
// Matche.belongsTo(Team, { foreignKey: 'teamName', as: 'awayTeamGoals' });

// Team.hasMany(Matche, { foreignKey: 'id', as: 'homeTeam' });
// Team.hasMany(Matche, { foreignKey: 'teamName', as: 'awayTeamGoals' });

// OtherModel.belongsTo(User, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(User, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// User.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// User.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Team;
