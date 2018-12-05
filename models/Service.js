const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ServiceSchema = new Schema ({
    category: String,
    description: String
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;