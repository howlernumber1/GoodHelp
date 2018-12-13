const express = require('express');
const router = express.Router();
const Requests = require('../../models/Requests');

// @route GET api/Requests/test
// @desc  Tests Requests route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Requests Works!"}));

router.get('/', function(req, res) {
  Requests.find({})
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// POST 
// parameters sent with 
router.post('/', function(req, res) {
  var category = req.body.category;
  var description= req.body.description;
  
  res.send(category + ' ' + description);
});
  

module.exports = router;
