const { body, param, checkExact } = require('express-validator');

const db = require('../../models');

const newUserValidationRules = [
  body('firstName').trim()
    .notEmpty().withMessage('firstName is required')
    .matches(/^[A-Za-zА-Яа-я-]+$/)
    .withMessage('firstName must be a string of alphabetical or "-"'),
  body('lastName', 'lastName is required and should be string').trim()
    .notEmpty().withMessage('lastName is required')
    .matches(/^[A-Za-zА-Яа-я-]+$/)
    .withMessage('lastName must be a string of alphabetical or "-"'),
];

const existingUserValidationRules = [
  param('id').custom(async (id) => {
    const user = await db.users.findOne({
      where: { id },
      attributes: ['id'],
    });

    if (!user) {
      return Promise.reject(new Error(`User with id ${id} doesn't exists`));
    }

    return Promise.resolve();
  }),
  body('firstName')
    .optional({ values: 'indefined' })
    .trim()
    .notEmpty()
    .withMessage('firstName can\'t be empty')
    .matches(/^[A-Za-zА-Яа-я-]+$/)
    .withMessage('firstName must be a string of alphabetical or "-"'),
  body('lastName')
    .optional({ values: 'indefined' })
    .trim()
    .notEmpty()
    .withMessage('lastName can\'t be empty')
    .matches(/^[A-Za-zА-Яа-я-]+$/)
    .withMessage('lastName must be a string of alphabetical or "-"'),
  checkExact([
    body('firstName'),
    body('lastName'),
  ], {
    locations: ['body'],
    message: 'Only firstName and lastName are allowed',
  }),
];

module.exports = {
  newUserValidationRules,
  existingUserValidationRules,
};
