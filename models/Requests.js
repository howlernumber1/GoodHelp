const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var RequestsSchema = new Schema ({
    category: String,
    description: String
});

const Requests = mongoose.model('Requests', RequestsSchema);

module.exports = Requests;
