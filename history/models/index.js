const Sequelize = require('sequelize');
const dotenv = require('dotenv');

const records = require('./record.model');

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
db.records = records(sequelize, Sequelize);

module.exports = db;
