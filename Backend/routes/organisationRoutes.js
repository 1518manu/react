
const express = require('express'); 
const { loginOrganisation } = require('../controllers/organisationController');
const router = express.Router();

router.post('/organisation-login', loginOrganisation);

module.exports = router; 