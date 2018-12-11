const express = require('express');
const router = express.Router();

// @route GET api/Services/test
// @desc  Tests Services route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Services Works!"}));

module.exports = router;

