const express = require('express');

const router = express.Router();
const users = require('../controllers/users');

router.route('/register').post(users.register);

router.route('/login').post(users.login);

module.exports = router;
