import { Sequelize } from 'sequelize';
import * as config from '../config/database';
import Users from './Users'

export default new Sequelize(config);

export { Users };
