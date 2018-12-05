const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

// show any mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
})


// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


//once logged in to the db through mongosse, log a success message
db.once('open', function() {
  console.log('Mongoose connection sucessful.');
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
