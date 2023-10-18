const express = require('express');
const { checkExact } = require('express-validator');

const users = require('../controllers/user.controllers');
const validate = require('../middlewares/validation');
const {
  newUserValidationRules,
  existingUserValidationRules,
} = require('../middlewares/validation/userValidationRules');
const { idValidationRules } = require('../middlewares/validation/idValidationRules');

const router = express.Router();

router.post(
  '/',
  validate(newUserValidationRules),
  users.create,
);
router.patch(
  '/:id',
  validate(
    idValidationRules,
    existingUserValidationRules,
  ),
  users.update,
);
router.get('/', users.list);

module.exports = router;
