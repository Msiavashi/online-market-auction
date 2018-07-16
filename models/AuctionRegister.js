var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AuctionRegisterPlan = require('./AuctionRegisterPlan');
var User = require('./User');
var AuctionItem = require("./AuctionItem");
var Auction = require("./Auction");


var AuctionRegisterSchema = new Schema({

    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },

    plan: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "AuctionRegisterPlan"
    },

    auctionItem: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "AuctionItem"

    }],

});


module.exports = mongoose.model("AuctionRegister", AuctionRegisterSchema);