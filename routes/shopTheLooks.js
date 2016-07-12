var express = require('express');
var router = express.Router();
var Match = require('../models/Match.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  Match.find(function(err, matches) {
    if (err) return console.error(err);
    res.render('shop-the-looks', { 'matches': matches });
  });
});

module.exports = router;
