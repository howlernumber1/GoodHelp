const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ServicesSchema = new Schema ({
    category: String,
    description: String
});

const Service = mongoose.model('Service', ServicesSchema);

module.exports = Services;