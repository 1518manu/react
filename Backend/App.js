require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const app = express();
connectDB();

app.use(bodyParser.json());

// Define routes

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// require('dotenv').config();
// const express = require('express');
// const connectDB = require('./config/db');
// const userRouter = require('./routes/userRouter');

// const app = express();

// // Connect to the database
// connectDB();

// // Middleware to parse JSON data
// app.use(express.json());

// // Define routes
// app.use('/api', userRouter); // All routes in userRouter will have /api prefix

// // Start the server
// const PORT = process.env.PORT || 5500;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
