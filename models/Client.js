const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ClientSchema = new Schema ({
    name: String,
    phone: String,
    email: String
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;