const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const OrganisationSchema = new mongoose.Schema({
  org_id: { type: Number, unique: true }, // This field will auto-increment
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact:{type:Number,required:true},
});

// Apply the AutoIncrement plugin to the 'org_id' field
OrganisationSchema.plugin(AutoIncrement, { inc_field: 'org_id' });

const Organisation = mongoose.model('Organisation', OrganisationSchema);
module.exports = Organisation;
