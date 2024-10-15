const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
const Volunteer = require('./models/Volunteer');

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CSN_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'));


app.post('/volunteer-register', async (req, res) => {
  const { name, phone, skill, customSkill, dob, age, email, password } = req.body;

  try {
    // Check if email or phone already exists
    const existingVolunteer = await Volunteer.findOne({ 
      $or: [{ email }, { phone }] 
    });

    if (existingVolunteer) {
      const message = existingVolunteer.email === email 
        ? 'Email already exists' 
        : 'Phone number already exists';
      return res.status(409).json({ message });
    }

    // Create new volunteer
    const newVolunteer = new Volunteer({
      name,
      phone,
      skill,
      customSkill,
      dob,
      age,
      email,
      password
    });

    const savedVolunteer = await newVolunteer.save();
    res.status(201).json(savedVolunteer);
  } catch (error) {
    console.error('Error saving volunteer:', error);
    res.status(500).json({ message: 'Error saving volunteer data' });
  }
});



// app.listen(5174, () => {
//   console.log('Server is running on http://localhost:5174');
// });
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
