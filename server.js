//Setup Environment Variables
require('dotenv').config({path: './bin/.env'});

//Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    LocalStrategy = require('passport-local');

// Controllers
var userCtrl = require('./controllers/userCtrl');

// Services
var passport = require('./bin/passport');

// Policies
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};

//Express Setup
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: process.env.MIT_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

//Endpoints
app.post('/users', userCtrl.register);
app.get('/me', isAuthed, userCtrl.me);
app.put('/users/:_id', isAuthed, userCtrl.update);

app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));
app.get('/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});


//Server and DB Init
var port = (process.env.port || process.env.MIT_PORT);
var mongoUri = process.env.MIT_MONGO_URI;

mongoose.connect(mongoUri);
mongoose.connection
  .on('error', console.error.bind(console, 'connection error: '))
  .once('open', function() {
    console.log('Connected to MongoDB at', mongoUri);
    app.listen(port, function() {
      console.log('Listening on port ' + port);
    });
  });
