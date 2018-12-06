const express = require('express');
const mongoose = require('mongoose');

const client = require('./routes/api/Client');
const service = require('./routes/api/Service');
const serviceprovider = require('./routes/api/ServiceProvider');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

// Use Routes
app.use('/api/client', client);
app.use('/api/service', service);
app.use('/api/serviceprovider', serviceprovider);


// required for Heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));