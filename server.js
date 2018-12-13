const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const morgan = require('morgan');
const clients = require('./routes/api/clients');
const profile = require('./routes/api/profile');
const services = require('./routes/api/services');
const post = require('./routes/api/post');

const app = express();
const PORT = process.env.PORT || 5001;

// DB Config
// const db = require('./config/keys').mongoURI;

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined'));

// Passport Config
require('./config/passport');

// Passport middleware
app.use(passport.initialize());



// Use Routes
app.use('/api/clients', clients);
app.use('/api/profile', profile);
app.use('/api/services', services);
app.use('/api/post', post);



// -----------------Database configuration with Mongoose---------------
// -----------------Define local MongoDB URI---------------
var databaseUri = 'mongodb://localhost/goodhelpApp';
// ------------------------------------------------
if (process.env.MONGODB_URI) {
//THIS EXECUTES IF THIS IS BEING EXECUTED IN YOUR HEROKU APP
  mongoose.connect(process.env.MONGODB_URI);
} else {
//THIS EXECUTES IF THIS IS BEING EXECUTED ON YOUR LOCAL MACHINE
  mongoose.connect(databaseUri);
}
//-----------------End database configuration-------------------------

var db = mongoose.connection;

// show any mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
})


//once logged in to the db through mongosse, log a success message
db.once('open', function() {
  console.log('Mongoose connection sucessful.');
})


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
