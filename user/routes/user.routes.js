const express = require('express');
const users = require('../controllers/user.controllers');

const router = express.Router();

router.post('/', users.create);
router.put('/:id', users.update);
router.get('/', users.list);

module.exports = router;
