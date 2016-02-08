var mongoose = require('mongoose'),
    metaInfo = require('./schemas/metaSchema');


var vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim:true,
    lowercase: true,
    index: true
  },

  phone: {
    type: Number,
    trim: true
  },

  addressStreet: {
    type: String,
    lowercase: true,
    trim: true
  },

  addressCity: {
    type: String,
    lowercase: true,
    trim: true
  },

  addressState: {
    type: String,
    lowercase: true,
    trim: true
  },

  addressZip: {
    type: String,
    lowercase: true,
    trim: true
  },

  meta: metaInfo

});

module.exports = mongoose.model('Vendor', vendorSchema);
