const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  Food: { type: Number, required: true, default: 100 },
  'Clothing (Men)': { type: Number, required: true, default: 50 },
  'Clothing (Women)': { type: Number, required: true, default: 30 },
  'Clothing (Children)': { type: Number, required: true, default: 20 },
});

const Inventory = mongoose.model('Inventory', InventorySchema);
module.exports = Inventory;