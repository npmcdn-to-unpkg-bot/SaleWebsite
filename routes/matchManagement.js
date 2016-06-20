var express = require('express');
var router = express.Router();
var Match = require('../models/Match.js');

router.get('/', function(req, res) {
  Match.find(function(err, matches) {
    if (err) return console.error(err);
    res.render('matchManagement', { 'matches': matches });
  });
});

module.exports = router;
