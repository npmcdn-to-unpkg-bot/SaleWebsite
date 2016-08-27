var express = require('express');
var router = express.Router();
var Match = require('../models/Match.js');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: '哈哈哈',
        description: "哈哈的网站"
    });
});

module.exports = router;
