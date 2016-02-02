var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');
    // passport = require('passport'),
    // mongoose = require('mongoose'),
    // session = require('express-session'),
    // LocalStrategy = require('passport-local');


// DB Models
//var User = require('./api/models/userModel.js');

// Controllers


//Database Setup
// var mongoUri = 'mongodb://localhost:27017/irish-tacos';
// mongoose.connect(mongoUri);
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', function () {
// 	console.log('Connected to mongo at', mongoUri);
// });

//Passport Setup


//Express Setup
var app = express();
app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

// app.use(session({
// 	secret: 'MONKEYBUTTS',
// 	saveUninitialized: false,
// 	resave: true
// }));


  //Server Init - Listen
app.listen(app.get('port'), function(){
    console.log('Listening on port ' + app.get('port') + '.');
});
