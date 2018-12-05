const User = require('../models/User');



module.exports = function(app) {


//GET Request



































//Post Request

app.post('/', function(req, res) {

  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {
    const userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    }
    //use schema.create to insert data into the db
    User.create(userData, function (err, user) {
      if (err) {
        return next(err)
      } else {

        //redirect user to there profile page with /profile. right now going to home page.
        return res.redirect('/');
      }
    });
  }



});












}
