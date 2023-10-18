const { param } = require('express-validator');

const idValidationRules = [
  param('id')
    .isInt({ min: 1 }).withMessage('id should be natural')
    .toInt(),
];

module.exports = {
  idValidationRules,
};
