const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Register Customer
router.post('/register', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json({ message: "Customer registered successfully", customer });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Customers
router.get('/all', async (req, res) => {
  try {
    const customers = await Customer.find().populate('userId', 'name email');
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Single Customer
router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id).populate('userId', 'name email');
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
