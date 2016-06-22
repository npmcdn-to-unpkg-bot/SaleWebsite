var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Match = require('../models/Match.js');
var multer = require('multer');
var mime = require('mime-types');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/')
  },
  filename: function (req, file, cb) {
    var fileName = "";
    var clo = req.body.clothes.split(/[,，]\s*/);
    for (var i = 0; i < clo.length; i++) {
      fileName += clo[i] + "_";
    }
    cb(null, fileName + "_" + new Date().getTime() + "." + mime.extension(file.mimetype));
  }
});

var uploading = multer({
  storage: storage,
});

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
  Match.find({'_id': {$in: findList}}, function(err, matches) {
    if (err) {
      res.status(500).send('Database Error!');
    } else {
      for (var i = 0; i < matches.length; i++) {
        console.log(matches.image)
      }
    }
  })
  .remove(function(err) {
    if (err) {
      res.status(500).send('Database Error!');
    } else {
      res.status(200).send('Deleted');
    }
  });
});

router.post('/add', uploading.single('imageFile'), function(req, res) {
  var clo = req.body.clothes.split(/[,，]\s*/);
  var newMatch = new Match({
    clothes: clo,
    price: req.body.price,
  });
  if (!req.file) {
    newMatch.image = req.body.imageUrl;
  } else {
    newMatch.image = '/images/' + req.file.filename;
  }
  newMatch.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});
module.exports = router;
