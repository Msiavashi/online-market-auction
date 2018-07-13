var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Plan = require("./Plan");
var AuctionRegisterPlanSchema = new Schema({

    paln: {
        type: mongoose.Types.ObjectId,
        ref: "Plan",
        required: true
    },

    Auction

});


module.exports = mongoose.model("AuctionRegisterPlan", AuctionRegisterPlanSchema);