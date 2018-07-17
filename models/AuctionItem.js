var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Item = require("./Item");
var Auction = require("./Auction");
var AuctionRegister = require("./AuctionRegister");

var AuctionItemSchema = new Schema({

    item: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Item"
    },

    auction: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Auction"
    },

    auctionRegister: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "AuctionRegister"
    }]
});


module.exports = mongoose.model("AuctionItem", AuctionItemSchema);



