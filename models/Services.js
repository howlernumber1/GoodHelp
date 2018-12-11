const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ServicesSchema = new Schema ({
    category: String,
    description: String
});

const Services = mongoose.model('Services', ServicesSchema);

module.exports = Services;