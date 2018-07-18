var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuctionSchema = new Schema({

    title: {
        type: String,
        trim: true,
        required: true
    },

    description: {
        type: String,
    },

    startDate: {
        type: Date,
        required: true
    },


    basePrice: {
        type: Number,
        set: setPrice,
        get: getPrice,
        required: true
    },

    maxPrice: {
        type: Number,
        get: getPrice,
        set: setPrice,
        required: true
    },

    maxMembers: {
        type: Number,
        required: true
    },

    ratio: {
        type: Number,
        required: true
    },

});


// getters and setters

function getPrice(price){
    return (price / 1000).toFixed(3);
};


function setPrice(price){
    return price * 1000;
}
module.exports = mongoose.model("Auction", AuctionSchema);