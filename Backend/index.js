// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const Volunteer = require('./models/Volunteer');

const app = express();
const PORT = process.env.PORT || 5500;

// Middleware
app.use(cors());
app.use(bodyParser.json());
//--------------

// MongoDB connection
{/* mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));*/}
  
//--------------
  // MongoDB connection with debugging
mongoose.set('debug', true); // Add this line for debugging
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// POST endpoint to register a volunteer
app.post('/api/volunteers', async (req, res) => {
  const { name, phone, skill, customSkill, dob, age, email, password } = req.body;

  const newVolunteer = new Volunteer({
    name,
    phone,
    skill,
    customSkill,
    dob,
    age,
    email,
    password, // Ensure to hash this in production
  });

  try {
    const savedVolunteer = await newVolunteer.save();
    res.status(201).json(savedVolunteer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
