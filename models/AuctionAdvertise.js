var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuctionAdvertiseSchema = new Schema({

    images: [{
        type: String,
    }]

});


module.exports = mongoose.model("AuctionAdvertise", AuctionAdvertiseSchema);