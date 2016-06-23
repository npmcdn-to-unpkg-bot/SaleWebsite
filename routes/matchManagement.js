var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Match = require('../models/Match.js');
var multer = require('multer');
var mime = require('mime-types');
var fs = require('fs');

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

router.post('/delete', function(req, res, next) {
  var delList = req.body.list;
  // init id list
  var idList = [];
  for (var i = 0; i < delList.length; i++) {
    idList.push(mongoose.Types.ObjectId(delList[i]));
  }
  req.idList = idList;
  req.fileList = [];
  // use id list to find docs
  Match.find({'_id': {$in: idList}}, function(err, matches) {
    if (err) {
      res.status(500).send('Database Error!');
    } else {
      for (var i = 0; i < matches.length; i++) {
        if (!matches[i].url) {
          req.fileList.push(matches[i].image);
        }
      }
      next();
    }
  });
}, function(req, res) {
  var idList = req.idList;
  var fileList = req.fileList;
  Match.find({'_id': {$in: idList}}).remove(function(err) {
    if (err) {
      res.status(500).send('Database Error!');
    } else {
      // delete the files from disk
      for (var i = 0; i < fileList.length; i++) {
        fs.unlink(__dirname + '/../public' + fileList[i]);
      }
      res.status(200).send('Deleted');
    }
  });
  console.log(fileList);
});

router.post('/add', uploading.single('imageFile'), function(req, res) {
  var clo = req.body.clothes.split(/[,，]\s*/);
  var newMatch = new Match({
    clothes: clo,
    price: req.body.price,
    matchTitle : req.body.matchTitle
  });
  if (req.body.description) {
    newMatch.description = req.body.description;
  }
  if (!req.file) {
    newMatch.image = req.body.imageUrl;
    newMatch.url = true;
  } else {
    newMatch.image = '/images/' + req.file.filename;
    newMatch.url = false;
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
