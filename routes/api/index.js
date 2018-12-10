const router = require('express').Router();
const db = require('../models');
router.get('/api/kudos', function(req, res) {
  // db.Kudos.find(function(err,kudos){
  //     res.json(kudos);
  // });
  //Updated find route so sender/receiver are populated in response
  db.Kudos.find({})
    .populate('_toId')
    .populate('_fromId')
    .then(function(kudos) {
      res.json(kudos);
    })
    .catch(function(err) {
      console.log(err);
    });
});
router.post('/api/users', function(req, res) {
  db.User.create(req.body).then(function(newUser) {
    res.json({
      message: 'userCreated'
    });
  });
});
router.post('/api/kudos', function(req, res) {
  db.Kudos.create(req.body).then(function(newKudo) {
    res.json({
      message: 'kudoCreated'
    });
  });
});


// Delete route for Kudos
router.get('/api/kudos', function deleteData(item, url) {
  return fetch(url + '/' + item, {
    method: 'delete'
  })
  .then(response => response.json());
});
 

router.get('/api/users', function(req, res) {
  db.User.find().then(function(users) {
    res.json(users);
  });
});
module.exports = router;

