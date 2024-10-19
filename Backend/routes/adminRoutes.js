const express = require('express');
const { loginAdmin,registerAdmin} = require('../controllers/adminController');
//const { loginAdmin,registerAdmin} = require('../controllers/adminController');
//const { loginAdmin,registerAdmin ,adminDashboard} = require('../controllers/adminController');
const adminDashboard = require('../controllers/adminController');

const router = express.Router();
console.log("route")
router.post('/admin-login', loginAdmin);
router.post('/admin-register', registerAdmin);
//router.post('/admin-dashboard', adminDashboard);
router.get('/admin-dashboard/:skill1', adminDashboard.fetchVolunteers);
//router.get('/admin-dashboard/:skill1', adminDashboard.fetchVolunteers);

module.exports = router;