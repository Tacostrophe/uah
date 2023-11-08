const express = require('express');

const records = require('../controllers/record.controllers');

const router = express.Router();

router.get(
  '/',
  records.list,
);
router.post(
  '/',
  records.create,
);

module.exports = router;
