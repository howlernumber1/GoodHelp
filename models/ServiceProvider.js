const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ServiceProviderSchema = new Schema({
    business_name: String,
    services_provided: [
        {
            description: String
        }
    ],
    areas_serviced: [
        {
            location: String
        }
    ],
    reviews: [
        {
            review_body: String
        }
    ],
    ratings: [
        {
            number_of_stars: String
        }
    ],
    years_of_experience: String,
    website_link: String,
    phone: String,
    email: String

});

const ServiceProvider = mongoose.model('ServiceProvider', ServiceProviderSchema);

module.exports = ServiceProvider;