var mongoose = require('mongoose');
var matchSchema = mongoose.Schema({
    clothes: [String],
    image: String,
    price: Number
});
var Match = mongoose.model('Match', matchSchema);

module.exports = Match;
