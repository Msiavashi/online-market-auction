var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Auction = require("./Auction");
var User = require('./User');

var OfferSchema = new Schema({

    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },

    totalPrice: {
        type: Number,
        set: setPrice,
        get: getPrice
    },

    remainedBids: {
        type: Number
    },

    win: {
        type: Boolean,
        required: true
    },

    auction: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Auction"
    },

    created_at: {
        type: Date,
        default: new Date(),
        required: true
    },

});

// getters and setters

function getPrice(price){
    return (price / 1000).toFixed(3);
};


function setPrice(price){
    return price * 1000;
}

module.exports = mongoose.model("Offer", OfferSchema);