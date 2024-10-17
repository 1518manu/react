const express = require('express');
const { loginAdmin,registerAdmin } = require('../controllers/adminController');

const router = express.Router();
console.log("route")
router.post('/admin-login', loginAdmin);
router.post('/admin-register', registerAdmin);
module.exports = router;