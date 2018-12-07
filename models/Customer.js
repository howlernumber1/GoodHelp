const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CustomerSchema = new Schema({
    name: {
        type: Schema.Types.ObjectId,
        ref: 'serviceprovider'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

});

module.exports = Customer = mongoose.model('customer', CustomerSchema);