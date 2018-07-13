var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemAuctionSchema = new Schema({

    itemId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },

    auctionId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }


});


module.exports = mongoose.model("PeerItem", PeerItemSchema);