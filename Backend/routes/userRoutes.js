

const express = require('express');
const { loginUser, registerUser } = require('../controllers/userController');

const router = express.Router();
console.log("route")
router.post('/user-login', loginUser);
router.post('/user-register', registerUser);

module.exports = router;

