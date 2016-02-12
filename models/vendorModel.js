var mongoose = require('mongoose'),
    metaInfo = require('./schemas/metaSchema');


var vendorSchema = new mongoose.Schema({
  name: { type: String, required: true, trim:true, lowercase: true, index: true },
  phone: { type: Number, trim: true },
  address: {
    street: { type: String, lowercase: true, trim: true },
    city: { type: String, lowercase: true, trim: true },
    state: { type: String, lowercase: true, trim: true },
    zip: { type: String, lowercase: true, trim: true }
  },
  meta: metaInfo
});

module.exports = mongoose.model('Vendor', vendorSchema);
