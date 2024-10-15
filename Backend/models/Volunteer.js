// models/Volunteer.js
const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  skill: { type: String, required: true },
  customSkill: { type: String },
  dob: { type: Date, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);
module.exports = Volunteer;
