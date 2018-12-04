const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ServiceSchema = new Schema ({

});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;