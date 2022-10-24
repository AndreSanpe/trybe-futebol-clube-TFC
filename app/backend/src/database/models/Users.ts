import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';

class Users extends Model {
  id!: number;
  username!: string;
  role!: string;
  password!: string;
  email!: string;
  // createdAt: Date;
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(User, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(User, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// User.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// User.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Users;
