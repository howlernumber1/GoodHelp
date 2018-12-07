const express = require('express');
const router = express.Router();

// @route GET api/Customer/test
// @desc  Tests post route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Customer Works!"}));

module.exports = router;

