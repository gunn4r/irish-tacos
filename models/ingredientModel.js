var mongoose = require('mongoose');

var Ingredient = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim:true,
    lowercase: true
  },
  category: {
    type: String,
    trim:true,
    lowercase: true
  },
  unit: {
    type: String,
    required: true,
    lowercase: true
  },
  calories: {
    type: Number,
    required: true,
    trim: true
  },
  active: {
    type: Boolean,
    default: true,
    required: true
  },
  createdAt : {
    type: Date,
    default: Date.now,
    required: true
  },
  updatedAt : {
    type: Date
  }
});



module.exports = mongoose.model('Ingredient', Ingredient);
