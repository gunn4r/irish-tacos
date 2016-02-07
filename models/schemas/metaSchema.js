var mongoose = require('mongoose');

var metaSchema = new mongoose.Schema({
  active: {
    type: Boolean,
    default: true,
    required: true
  },
  createdAt : { type: Date, default: Date.now },
  createdBy : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt : { type: Date },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});


metaSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});


module.exports = metaSchema;
