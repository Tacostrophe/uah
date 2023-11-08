const asyncHandler = require('express-async-handler');

const db = require('../models');

exports.create = asyncHandler(async (req, res) => {
  const newRecord = await db.records.create({
    userId: req.body.userId,
    type: req.body.type,
    date: req.body.date,
  });
  res.send(newRecord);
});

exports.list = asyncHandler(async (req, res) => {
  const records = await db.records.findAll();
  res.send(records);
});
