const express = require('express');
const router = express.Router();
const integrationController = require('../controllers/integrationController');

router.get('/', integrationController.listIntegratedData);

module.exports = router;