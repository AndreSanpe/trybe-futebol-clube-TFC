import { Sequelize } from 'sequelize';
import * as config from '../config/database';
import Users from './users'

export default new Sequelize(config);

export { Users };
