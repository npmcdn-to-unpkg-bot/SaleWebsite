var express = require('express');
var router = express.Router();
var Match = require('../models/Match.js');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var uploading = multer({
  storage: storage,
});

router.post('/', uploading.single('imageFile'), function(req, res) {
  var clo = req.body.clothes.split('[,，\s*]');
  console.log(req.file);
  var newMatch = new Match({
    clothes: clo,
    price: req.body.price,
    image: req.body.imageUrl
  });
  newMatch.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});
module.exports = router;
