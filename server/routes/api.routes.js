const express = require('express');

const router = express.Router();

router.use('/users', require('../controllers/users.controller'))

module.exports =router;
