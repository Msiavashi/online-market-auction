var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
        type: Boolean 
    },

    auction: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Auction"
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