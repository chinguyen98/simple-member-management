const express = require('express');
const router = express.Router();

const registerController = require('../controllers/register.controller');
const validateMiddleware = require('../middleware/validate.middleware');

router.get('/', registerController.registerPage);

router.post('/', validateMiddleware.validateForm, registerController.register);

module.exports = router;