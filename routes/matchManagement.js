var express = require('express');
var router = express.Router();
var Match = require('../models/Match.js');

router.get('/', function(req, res) {
  Match.find(function(err, matches) {
    if (err) return console.error(err);
    res.render('matchManagement', { 'matches': matches });
  });
});

router.post('/delete', function(req, res) {
  console.log(req.body.list);
  res.send('received');
});
module.exports = router;
