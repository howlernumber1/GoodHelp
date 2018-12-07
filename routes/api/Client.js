const express = require('express');
const router = express.Router();

// @route GET api/Client/test
// @desc  Tests post route
// @access Public
router.get('/', (req, res) => res.json({msg: "Client Works!"}));

module.exports = router;
