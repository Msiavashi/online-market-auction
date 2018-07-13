var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuctionItemSchema = new Schema({

    item: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Item"
    },

    auction: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Auction"
    }
});


module.exports = mongoose.model("AuctionItem", AuctionItemSchema);