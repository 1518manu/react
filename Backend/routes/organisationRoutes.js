
// const express = require('express'); 
// const { loginOrganisation } = require('../controllers/organisationController');
// const router = express.Router();

// router.post('/organisation-login', loginOrganisation);

// module.exports = router; 

const express = require('express'); 
const { loginOrganisation } = require('../controllers/organisationController');
const router = express.Router();

// Registration controller function (you'll need to create this)
const { registerOrganisation } = require('../controllers/organisationController');

// Define the registration route
router.post('/org-register', registerOrganisation);

// Define the login route
router.post('/organisation-login', loginOrganisation);

module.exports = router;
