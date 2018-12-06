const express = require('express');
const router = express.Router();

// @route GET api/ServiceProvider/test
// @desc  Tests ServiceProvider route
// @access Public
router.get('/test', (req, res) => res.json({msg: "ServiceProvider Works!"}));

module.exports = router;

