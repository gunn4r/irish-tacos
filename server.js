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

// Passport
var passport = require('./bin/passport');

// Policies
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send('You are not authenticated.');
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
  // TODO: Set Cookie Time out
  // TODO: Store session in DB
  // TODO: Convert from Cookies to Tokens
 //  ,cookie: {
 //   maxAge: 1000 * 60 * 60 * 24 //24 hours cookie length
 // },
 // store: SessionStore //save session in DB
}));
app.use(passport.initialize());
app.use(passport.session());

//Endpoints
app.post('/api/users', userCtrl.register);
app.get('/api/me', isAuthed, userCtrl.me);
app.put('/api/users/:_id', isAuthed, userCtrl.update);


//Login and Logout
app.post('/api/login', passport.authenticate('local', {
  successRedirect: '/api/me'
}));

app.get('/api/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('Sucessfully logged out.');
});


//Server and DB Init
var port = (process.env.port || process.env.MIT_PORT);
var mongoUri = process.env.MIT_MONGO_URI;

mongoose.connect(mongoUri);
mongoose.connection
  .on('error', console.error.bind(console, 'Connection Error: '))
  .once('open', function() {
    console.log('Connected to MongoDB at', mongoUri);
    app.listen(port, function() {
      console.log('Listening on port ' + port);
    });
  });
