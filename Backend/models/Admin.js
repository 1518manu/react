// const mongoose = require('mongoose');
// const AdminSchema = new mongoose.Schema({
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required:true,
//     }
//     // You can add more fields as needed
//   });
//   const Admin = mongoose.model('Admin', AdminSchema);
// module.exports = Admin;




//   //module.exports = mongoose.model('Admin', AdminSchema);
  //module.exports = mongoose.model('admin', AdminSchema);



  const mongoose = require('mongoose');
  const AdminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  
  // The first argument is the model name, which Mongoose uses to name the collection in the database.
  // By default, it will pluralize the model name ('Admin' becomes 'admins').
  //module.exports = mongoose.model('Admin', adminSchema);
  const Admin = mongoose.model('Admin', AdminSchema);
 module.exports = Admin;
