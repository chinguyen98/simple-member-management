const express = require('express');
const router = express.Router();

const registerController = require('../controllers/register.controller');

router.get('/', registerController.registerPage);

router.post('/', registerController.register);

module.exports = router;