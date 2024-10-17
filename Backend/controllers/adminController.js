const Admin = require('../models/Admin');
console.log("out cont")
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  console.log("in cont log")
  try {
    // Find admin by email
    const admin = await Admin.findOne({ email });
    
    if (!admin) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Directly compare the passwords
    if (admin.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Successful login
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

//register


exports.registerAdmin = async (req, res) => {
  const { name, phone, dob, age, email, password } = req.body;
  console.log("in cont reg")
  try {
    const existingAdmin = await Admin.findOne({ $or: [{ email }, { password }] });
    
    if (existingAdmin) {
      const message = existingAdmin.email === email 
        ? 'Email already exists' 
        : 'Phone number already exists';
      return res.status(409).json({ message });
    }

    //const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      email,
      password,
    });

    const savedAdmin= await newAdmin.save();
    console.log(savedAdmin)
    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error saving Admin data' });
  }
};