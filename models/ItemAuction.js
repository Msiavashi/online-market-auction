var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemAuctionSchema = new Schema({

    itemId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },

    auctionId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }


});


module.exports = mongoose.model("ItemAuction", ItemAuctionSchema);