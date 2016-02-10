var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    metaSchema = require('./schemas/metaSchema');

var userSchema = new mongoose.Schema({
  name: {
    first: { type: String, required: true, trim:true, lowercase: true },
    last: { type: String, required: true, trim:true, lowercase: true }
  },
  email: { type: String, index: true, trim: true, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, trim: true },
  phone: { type: Number, trim: true },
  type : { type: String, required: true, default: 'employee', enum: ['admin', 'manager', 'employee']
  },
  meta: metaSchema
});

userSchema.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password'))	{
    return next();
  }
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;

  return next(null, user);
});

userSchema.methods.verifyPassword = function(reqBodyPassword) {
  return bcrypt.compareSync(reqBodyPassword, this.password); //this = the user
};

module.exports = mongoose.model('User', userSchema);
