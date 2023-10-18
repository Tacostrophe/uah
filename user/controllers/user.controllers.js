const asyncHandler = require('express-async-handler');

const db = require('../models');
const createRecord = require('../utils/createRecord');

exports.create = asyncHandler(async (req, res) => {
  const userTemplate = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  const user = await db.users.create(userTemplate);
  await createRecord('create', user);
  res.send(user);
});

exports.update = asyncHandler(async (req, res) => {
  const user = await db.users.findByPk(req.params.id);
  const entriesToUpdate = Object.entries(req.body);
  entriesToUpdate.forEach(([key, value]) => {
    user[key] = value;
  });
  user.save();
  await createRecord('update', user);
  res.send(user);
});

exports.list = asyncHandler(async (req, res) => {
  const users = await db.users.findAll();
  res.send(users);
});
