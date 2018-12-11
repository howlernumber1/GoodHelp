const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Profile model
const profile = require('../../models/Profile');

// @route   GET  api/profile/test
// @desc    TESTS profile route
// @access  PUBLIC

router.get('/test', (req, res) => res.json({
    msg: 'Login Works!'
}));

// @route   GET  api/profile
// @desc    GET current users profile
// @access  PRIVATE
router.get('/',
    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        const errors = {};

        Customer.findOne({
                user: req.user.id
            })
            .then(profile => {
                if (!profile) {
                    errors.noprofile = 'There is no profile for this user!';
                    return res.status(400).json(errors);
                }
                res.json(profile);
            })
            .catch(err => res.status(404).json(err));
    });

// @route   POST  api/profile
// @desc    Create or edit user profile
// @access  PRIVATE
router.post('/',
    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        // Get fields
        const profileFields = {};
        profileFields.user = req.user.id;
        if (req.body.handle) profileFields.handle = req.body.handle;
        if (req.body.name) profileFields.name = req.body.name;
        if (req.body.phone) profileFields.phone = req.body.phone;
        if (req.body.email) profileFields.email = req.body.email;
    }
);

module.exports = router;