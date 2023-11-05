const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE ?? 'db',
  process.env.PGUSER ?? 'postgres',
  process.env.PGPASSWORD ?? 'root',
  {
    host: process.env.HOST ?? 'localhost',
    dialect: 'postggres',
  },
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
