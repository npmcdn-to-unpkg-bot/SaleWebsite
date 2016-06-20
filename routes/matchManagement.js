var express = require('express');
var router = express.Router();
var Match = require('../models/Match.js');

router.get('/', function(req, res) {
  res.render('matchManagement');
});

module.exports = router;
