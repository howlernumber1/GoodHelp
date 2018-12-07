const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Customer model
const customer = require('../../models/Customer');

// Load ServiceProvider model 
const serviceprovider = require('../../models/ServiceProvider');

// Load Client model
const client = require('../../models/Client');

// @route   GET  api/profile/test
// @desc    TESTS profile route
// @access  PUBLIC

router.get('/test', (req, res) => res.json({msg: 'Profile Works!'}));

// @route   GET  api/profile
// @desc    GET current users profile
// @access  PRIVATE
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    Customer.findOne({ user: req.user.id })
        .then(profile => {
            if(!profile) {
                errors.noprofile = 'There is no profile for this user!';
                return res.status(400).json(errors);
            }
        res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

module.exports = router;