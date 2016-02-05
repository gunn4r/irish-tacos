var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var User = new mongoose.Schema({
  nameFirst: {
    type: String,
    required: true,
    trim:true,
    lowercase: true
  },
  nameLast: {
    type: String,
    required: true,
    trim:true,
    lowercase: true
  },
  email: {
    type: String,
    index: true,
    trim: true,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
     type: Number,
     trim: true
   },
  type : {
    type: String,
    required: true,
    default: 'user',
    enum: ['admin', 'manager', 'employee']
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

//Mongoose middleware that triggers on every save of User model. Encrypts password on creation, and skips encryption if the password isn't modified.
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
  return bcrypt.compareSync(reqBodyPassword, this.password); //this = the user
};

module.exports = mongoose.model('User', User);
