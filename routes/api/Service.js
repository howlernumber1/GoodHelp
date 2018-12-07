const express = require('express');
const router = express.Router();

// @route GET api/Service/test
// @desc  Tests Service route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Service Works!"}));

module.exports = router;

