const express = require('express');
const router = express.Router();
const ServiceProvider = require('../../models/ServiceProvider.js')

// @route GET api/ServiceProvider/test
// @desc  Tests ServiceProvider route
// @access Public
router.get('/test', (req, res) => res.json({msg: "ServiceProvider Works!"}));

router.get('/:category', (req, res) => {
    ServiceProvider.find({category: req.params.category})
    .then(function(data) {
        res.json(data);
    })
    .catch(function(err) {
        res.status(500).json(err);
    })
})

router.get('/search/:name', (req, res) => {
    console.log(req.params.name)
    ServiceProvider.find({business_name: req.params.name})
    .then(function(data) {
        res.json(data);
    })
    .catch(function(err) {
        res.status(500).json(err);
    })
})

module.exports = router;

