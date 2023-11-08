const express = require('express');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');

const db = require('./models');
const recordsRoutes = require('./routes/record.routes');

dotenv.config();

const app = express();

// syncing db
db.sequelize.sync()
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err) => {
    console.log(`Failed to sync db: ${err.message}`);
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routers
app.use('/records', recordsRoutes);

module.exports = app;
