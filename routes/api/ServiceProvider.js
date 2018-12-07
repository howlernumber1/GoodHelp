const express = require('express');
const router = express.Router();

// @route GET api/ServiceProvider/test
// @desc  Tests ServiceProvider route
// @access Public
router.get('/', (req, res) => res.json({msg: "ServiceProvider Works!"}));

module.exports = router;
