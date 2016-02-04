var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var User = new mongoose.Schema({
  name: { type: String },
  email: { type: String, index: true, trim: true },
  password: { type: String }
});

User.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password'))	{
    console.log('User didnt modify password', user.isModified('password'));
    return next();
  }
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;

  return next(null, user);
});


User.methods.verifyPassword = function(reqBodyPassword) {
  var user = this;
  var compare = bcrypt.compareSync(reqBodyPassword, user.password);
  return compare;
};

module.exports = mongoose.model('User', User);
