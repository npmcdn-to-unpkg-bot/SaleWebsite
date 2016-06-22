var mongoose = require('mongoose');
var matchSchema = mongoose.Schema({
    clothes: [String],
    url: Boolean,
    image: String,
    price: Number,
    createdAt: {type: Date, default: Date.now},
    description: String,
    titleName: String
});
var Match = mongoose.model('Match', matchSchema);

module.exports = Match;
