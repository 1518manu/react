

//---------------------------------------------------------



// controllers/volunteerController.js
const User = require('../models/User');
console.log("out cont")
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("in cont log")
  try {
    // Find user by email
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Directly compare the passwords
    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Successful login
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.registerUser = async (req, res) => {
  const { name, phone, dob, age, email, password } = req.body;
  console.log("in cont reg")
  try {
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    
    if (existingUser) {
      const message = existingUser.email === email 
        ? 'Email already exists' 
        : 'Phone number already exists';
      return res.status(409).json({ message });
    }

    //const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      phone,
      dob,
      age,
      email,
      password,
    });

    const savedUser= await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error saving user data' });
  }
};
