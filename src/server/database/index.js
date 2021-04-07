import Sequelize from 'sequelize';
import configFile from '../config/';
import models from '../models';

const env = process.env.NODE_ENV || 'development';
const config = configFile[env];

/* const sequelize = new Sequelize('graphbook_dev', 'devuser', 'PASSWORD', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}); */

const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {
    models: models(sequelize),
    sequelize,
}

export default sequelize;