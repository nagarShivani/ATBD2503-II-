// controllers/customerController.js

const Customer = require('../models/customermodel');

// Register a new customer
exports.registerCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json({ message: "Customer registered successfully", customer });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().populate('userId', 'name email');
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single customer by ID
exports.getSingleCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id).populate('userId', 'name email');
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
