const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');


// Register Customer
router.post('/register', customerController.registerCustomer);

// Get All Customers
router.get('/all', customerController.getAllCustomers);

// Get Single Customer
router.get('/:id', customerController.getSingleCustomer);

module.exports = router;
