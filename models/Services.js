const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ServicesSchema = new Schema ({
    category: String,
    description: String
});

const Services = mongoose.model('services', ServicesSchema);

module.exports = Services;
