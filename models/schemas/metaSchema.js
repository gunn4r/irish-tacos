var mongoose = require('mongoose');

var metaSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  createdAt : { type: Date},
  createdBy : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, default: '56b90ed8cae4720c34f6ad4e' },
  updatedAt : { type: Date},
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, default: '56b90ed8cae4720c34f6ad4e' }
});


metaSchema.pre('save', function(next) {
  var now = new Date();
  this.updatedAt = now;
  if(!this.createdAt) this.createdAt = now;
  next();
});


module.exports = metaSchema;
