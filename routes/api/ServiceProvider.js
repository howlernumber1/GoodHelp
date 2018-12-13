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





// login user Create start ------------------------------------------------------------------------------------------------------------------------------------------------------------

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  ServiceProvider.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, business_name: user.business_name, avatar: user.avatar }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.PRIVATE_KEY,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: token
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});



module.exports = router;
