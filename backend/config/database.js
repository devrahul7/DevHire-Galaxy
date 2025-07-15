import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('devhire_galaxy', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

export default sequelize;
