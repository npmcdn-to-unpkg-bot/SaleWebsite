var express = require('express');
var router = express.Router();
var Match = require('../models/Match.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  Match.find(function(err, matches) {
    if (err) return console.error(err);
        // res.render('shop-the-looks', { 'matches': matches });
        res.render('shop-the-looks', {
            title: 'Gucci Garden Collection - Exclusively Online',
            description: "Shop the Gucci Garden Collection available exclusively on Gucci.com. Designed by Alessandro Michele and featuring a colorful print of flowers & animals."
        });
  });
});

module.exports = router;
