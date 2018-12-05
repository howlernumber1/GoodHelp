const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();
const PORT = process.env.PORT || 3001;



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// -----------------Database configuration with Mongoose---------------
// -----------------Define local MongoDB URI---------------
var databaseUri = 'mongodb://localhost/goodhelpApp';
//------------------------------------------------
if (process.env.MONGODB_URI) {
//THIS EXECUTES IF THIS IS BEING EXECUTED IN YOUR HEROKU APP
  mongoose.connect(process.env.MONGODB_URI);
} else {
//THIS EXECUTES IF THIS IS BEING EXECUTED ON YOUR LOCAL MACHINE
  mongoose.connect(databaseUri);
}
//-----------------End database configuration-------------------------

var db = mongoose.connection;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


// show any mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
})

// require api routes
require('./routes/api-routes')(app);

//once logged in to the db through mongosse, log a success message
db.once('open', function() {
  console.log('Mongoose connection sucessful.');
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
