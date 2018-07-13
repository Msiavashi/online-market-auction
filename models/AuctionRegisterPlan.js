var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Plan = require("./Plan");
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

    auctionRegister: {
        type: mongoose.SchemaTypes.ObjectId
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