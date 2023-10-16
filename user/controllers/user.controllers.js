const asyncHandler = require('express-async-handler');

const db = require('../models');
const createRecord = require('../utils/createRecord');

exports.create = asyncHandler(async (req, res) => {
  const user = { id: 1, name: 'new user' };
  await createRecord('create', user);
  res.send(user);
});

exports.update = asyncHandler(async (req, res) => {
  const user = { id: req.params.id, name: 'existing user' };
  await createRecord('update', user);
  res.send(user);
});

exports.list = asyncHandler(async (req, res) => {
  const users = await db.users.findAll();
  res.send(users);
});
