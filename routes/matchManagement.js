var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Match = require('../models/Match.js');

router.get('/', function(req, res) {
  Match.find(function(err, matches) {
    if (err) return console.error(err);
    res.render('matchManagement', { 'matches': matches });
  });
});

router.post('/delete', function(req, res) {
  var delList = req.body.list;
  var findList = [];
  for (var i = 0; i < delList.length; i++) {
    findList.push(mongoose.Types.ObjectId(delList[i]));
  }
  Match.find({'_id': {$in: findList}}).remove(function(err) {
    if (err) {
      res.status(500).send('Database Error!');
    } else {
      res.status(200).send('Deleted');
    }
  });
});
module.exports = router;
