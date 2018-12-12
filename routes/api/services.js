const express = require('express');
const router = express.Router();
const Services = require('../../models/Services');

// @route GET api/Services/test
// @desc  Tests Services route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Services Works!"}));

router.get('/', function(req, res) {
  Services.find({})
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});

  

module.exports = router;
