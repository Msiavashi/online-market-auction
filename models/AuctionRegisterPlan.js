var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Plan = require("./Plan");
var Auction = require("./Auction");
var AuctionRegisterPlanSchema = new Schema({

    plan: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Plan",
        required: true
    },

    price: {
        type: Number,
        set: setPrice,
        get: getPrice
    },

    totalBids: {
        type: Number,
        required: true
    },

    auction: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Auction"
    }

});


// getters and setters
function getPrice(price){
    return (price / 1000).toFixed(3);
};


function setPrice(price){
    return price * 1000;
}

module.exports = mongoose.model("AuctionRegisterPlan", AuctionRegisterPlanSchema);