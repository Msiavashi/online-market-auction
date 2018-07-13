var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AuctionPlan = require("./AuctionPlan");

var AuctionUserSchema = new Schema({

    userId: {
        type: mongoose.SchemaTypes.ObjectId,
    },

    auctionId: {
        type: mongoose.SchemaTypes.ObjectId
    },

    plan: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "AuctionPlan"
    },


});


module.exports = mongoose.model("AuctionUser", AuctionUserSchema);