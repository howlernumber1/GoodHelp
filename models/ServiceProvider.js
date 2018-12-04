const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ServiceProviderSchema = new Schema ({
    business_name: String,
    services_provided: [
        description: String
    ]
});

const ServiceProvider = mongoose.model('ServiceProvider', ServiceProviderSchema);

module.exports = ServiceProvider;