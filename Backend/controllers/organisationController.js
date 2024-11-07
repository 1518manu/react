// const Organisation = require('../models/Organisation');
// console.log("out cont")
// exports.loginOrganisation = async (req, res) => {
//   const { email, password } = req.body;
//   console.log("in cont log")
//   try {
//     // Find organisation by email
//     const organisation = await Organisation.findOne({ email });
    
//     if (!organisation) {
//       return res.status(400).json({ message: 'Invalid email or password.' });
//     }

//     // Directly compare the passwords
//     if (organisation.password !== password) {
//       return res.status(400).json({ message: 'Invalid email or password.' });
//     }

//     // Successful login
//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };



const bcrypt = require('bcrypt');
const Organisation = require('../models/Organisation');

// Registration controller
exports.registerOrganisation = async (req, res) => {
  const { orgName, contact, licenseId, email, password } = req.body;

  // Basic validation
  if (!orgName || !contact || !licenseId || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new organisation document
    const newOrganisation = new Organisation({
      orgName,
      contact,
      licenseId,
      email,
      password: hashedPassword, // Save hashed password
    });

    await newOrganisation.save();

    // Respond with a success message
    res.status(201).json({ message: 'Organisation registered successfully!' });
  } catch (error) {
    console.error('Error registering organisation:', error);
    res.status(500).json({ message: 'An error occurred while registering.' });
  }
};

// Login controller
exports.loginOrganisation = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find organisation by email
    const organisation = await Organisation.findOne({ email });
    
    if (!organisation) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Compare the passwords
    const isMatch = await bcrypt.compare(password, organisation.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Successful login
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
