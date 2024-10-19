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

//----------------------------------------------------------------------------

//admin-volunteer fetch
const Volunteer = require('../models/Volunteer');
//exports.adminDashboard = async (req, res) => {
  exports.fetchVolunteers = async (req, res) => {
    console.log("admincontroller,fetchVolunteers reached")
    //const { date1, skill1 } = req.params; // Assuming the date and skill are passed as params
    const {skill1} = req.params;
  try {
    // Find volunteers whose skill matches and who are available on the provided date
    const volunteers = await Volunteer.find({
      skill: { $regex: skill1, $options: 'i' }/*, // Match skill (case-insensitive)
      date: date1  // Match date exactly
    */});

    if (volunteers.length === 0) {
      return res.status(404).json({ message: 'No volunteers found with the specified date and skill.' });
    }

    // Return the matching volunteers as JSON
    res.status(200).json(volunteers);
  } catch (error) {
    console.error('Error fetching volunteers:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

//   //const { name, phone, skill, customSkill } = req.body;
//   const { skills } = req.params;
//   console.log("in cont reg")
//   try {
//     const existingVolunteer = await Volunteer.findOne({ $or: [{ /*date1 */ }, { skill1 }] });
    
//     //if (existingVolunteer) {
//       if (volunteers.length === 0) {
//         return res.status(404).json({ message: 'No volunteers found with the specified skills.' });
//       }
  
//       // Send the filtered volunteer data back to the client
//       res.status(200).json(existingVolunteer);
//     } catch (error) {
//       console.error("Error fetching volunteers:", error);
//       res.status(500).json({ message: 'Server error' });
//     }
// };