const { validationResult } = require('express-validator');

const validate = (...validationRules) => async (req, res, next) => {
  await Promise.all(validationRules.flat().map((rule) => rule.run(req)));

  const result = validationResult(req);
  if (result.isEmpty()) {
    return next();
  }
  const errors = result.array();

  return res.status(500).send({ errors });
};

module.exports = validate;
