var express = require('express');
var router = express.Router();
var Match = require('../models/Match.js');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Gucci Official Site - Founded In Florence, Italy in 1921.',
        description: "Shop the Gucci Garden Collection available exclusively on Gucci.com. Designed by Alessandro Michele and featuring a colorful print of flowers & animals."
    });
});

module.exports = router;
