
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const volunteerRoutes = require('./routes/volunteerRoutes');
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const organisationRoutes = require('./routes/organisationRoutes')


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
console.log("server")
app.use('/api', userRoutes);
app.use('/api', volunteerRoutes);
app.use('/api', adminRoutes);
app.use('/api', organisationRoutes)


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
