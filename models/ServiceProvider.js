const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ServiceProviderSchema = new Schema({
    business_name: {
        type: String,
        ref: 'services'
    },
    category: String,
    handle: {
        type: String,
        max: 40
    },
    services_provided: {
            type: [String],
            required: true,
    }, 
    areas_serviced: {
            type: [String],
            required: true
    },
    reviews: {
            type: [String]
    },
    ratings: {
            type: String,
            required: true
    },
    years_of_experience: {
        type: Number,
        required: true
    },
    website_link: {
        type: String
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

module.exports = ServiceProvider = mongoose.model('serviceprovider', ServiceProviderSchema);