//Setup Environment Variables
require('dotenv').config({path: './bin/.env'});

//Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    session = require('express-session');

// Controllers
var userCtrl = require('./controllers/userCtrl'),
    vendorCtrl = require('./controllers/vendorCtrl'),
    brandCtrl = require('./controllers/brandCtrl'),
    inventoryCtrl = require('./controllers/inventoryCtrl'),
    receiptCtrl = require('./controllers/receiptCtrl'),
    recipeCtrl = require('./controllers/recipeCtrl');

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

//Users CRUD
app.post('/api/user', userCtrl.create);
app.get('/api/user', userCtrl.read);
app.put('/api/user/:id', userCtrl.update);
app.delete('/api/user/:id', userCtrl.delete);

//Vendors Crud
app.post('/api/vendor', vendorCtrl.create);
app.get('/api/vendor', vendorCtrl.read);
app.put('/api/vendor', vendorCtrl.update);
app.delete('/api/vendor', vendorCtrl.delete);

//Brands Crud
app.post('/api/brand', brandCtrl.create);
app.get('/api/brand', brandCtrl.read);
app.put('/api/brand', brandCtrl.update);
app.delete('/api/brand', brandCtrl.delete);

//Inventory Crud
app.post('/api/inventory', inventoryCtrl.create);
app.get('/api/inventory', inventoryCtrl.read);
app.put('/api/inventory', inventoryCtrl.update);
app.delete('/api/inventory', inventoryCtrl.delete);

//Receipt Crud
app.post('/api/receipt', receiptCtrl.create);
app.get('/api/receipt', receiptCtrl.read);
app.put('/api/receipt', receiptCtrl.update);
app.delete('/api/receipt', receiptCtrl.delete);

//Recipe Crud
app.post('/api/recipe', recipeCtrl.create);
app.get('/api/recipe', recipeCtrl.read);
app.put('/api/recipe', recipeCtrl.update);
app.delete('/api/recipe', recipeCtrl.delete);

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

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection
  .on('error', console.error.bind(console, 'Connection Error: '))
  .once('open', function() {
    console.log('Connected to MongoDB at', mongoUri.slice(mongoUri.indexOf('@')+1, mongoUri.length));
    app.listen(port, function() {
      console.log('Listening on port ' + port);
    });
  });
