const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ServiceSchema = new Schema ({
    description: String,
    time_frame: Date,
    budget: String,
    location: String
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;