

//---------------------------------------------------------



// controllers/volunteerController.js
const Volunteer = require('../models/Volunteer');
console.log("out cont")
exports.loginVolunteer = async (req, res) => {
  const { email, password } = req.body;
  console.log("in cont log")
  try {
    // Find volunteer by email
    const volunteer = await Volunteer.findOne({ email });
    
    if (!volunteer) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Directly compare the passwords
    if (volunteer.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Successful login
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.registerVolunteer = async (req, res) => {
  const { name, phone, skill, customSkill, dob, age, email, password } = req.body;
  console.log("in cont reg")
  try {
    const existingVolunteer = await Volunteer.findOne({ $or: [{ email }, { phone }] });
    
    if (existingVolunteer) {
      const message = existingVolunteer.email === email 
        ? 'Email already exists' 
        : 'Phone number already exists';
      return res.status(409).json({ message });
    }

    //const hashedPassword = await bcrypt.hash(password, 10);

    const newVolunteer = new Volunteer({
      name,
      phone,
      skill,
      customSkill,
      dob,
      age,
      email,
      password,
    });

    const savedVolunteer = await newVolunteer.save();
    res.status(201).json({ message: 'Volunteer registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error saving volunteer data' });
  }
};
