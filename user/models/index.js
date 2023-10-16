const Sequelize = require('sequelize');
const dotenv = require('dotenv');

const users = require('./user.model');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE ?? 'db',
  process.env.PGUSER ?? 'postgres',
  process.env.PGPASSWORD ?? 'root',
  {
    host: process.env.HOST ?? 'localhost',
    dialect: 'postgres',
  },
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = users(sequelize, Sequelize);

module.exports = db;
