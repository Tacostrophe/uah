const asyncHandler = require('express-async-handler');

exports.list = asyncHandler(async (req, res) => {
  res.send('list of all users');
});

exports.create = asyncHandler(async (req, res) => {
  res.send('create user');
});

exports.update = asyncHandler(async (req, res) => {
  res.send(`updating user ${req.params.id}`);
});
