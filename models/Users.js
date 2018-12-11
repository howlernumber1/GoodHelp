const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UsersSchema = new Schema({
    name: {
        type: Schema.Types.ObjectId
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

module.exports = Users = mongoose.model('users', UsersSchema);