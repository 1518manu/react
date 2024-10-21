const Organisation = require('../models/Organisation');
console.log("out cont")
exports.loginOrganisation = async (req, res) => {
  const { email, password } = req.body;
  console.log("in cont log")
  try {
    // Find organisation by email
    const organisation = await Organisation.findOne({ email });
    
    if (!organisation) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Directly compare the passwords
    if (organisation.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Successful login
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};