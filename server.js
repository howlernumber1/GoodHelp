const express = require('express');
const mongoose = require('mongoose');
const client = require('./routes/api/Client');
const service = require('./routes/api/Service');
const serviceprovider = require('./routes/api/ServiceProvider');
const customer = require('./routes/api/Customer');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


//------------------------------------------------
if (process.env.MONGODB_URI) {
//THIS EXECUTES IF THIS IS BEING EXECUTED IN YOUR HEROKU APP
  mongoose.connect(process.env.MONGODB_URI);
} else {
//THIS EXECUTES IF THIS IS BEING EXECUTED ON YOUR LOCAL MACHINE
  mongoose.connect(databaseUri);
}
//-----------------End database configuration-------------------------

// Define middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Use Routes
app.use('/api/client', client);
app.use('/api/service', service);
app.use('/api/serviceprovider', serviceprovider);
app.use('/api/customer', customer);

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
