
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Order = require('./Order.js');
var User = require('./User');
var Payment = require('./Payment');

var statusEnum = {
    UNPAID: 0,
    PAID: 1
}

var CartSchema = new Schema({

    orders: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Order"
    }],

    discountCode: {
        type: String,
        trim: true,
    },

    discountPrice:{
        type: Number,
        get: getDiscount,
        set: setDiscount,
        default: 0
    },

    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },

    status: {
        type: Number,
        enum: [statusEnum.UNPAID, statusEnum.PAID],
        required: true
    },

    payment: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Payment"
    }

});


// getters and setters
function getDiscount(price){
    return (price / 1000).toFixed(3);
};


function setDiscount(price){
    return price * 1000;
}

module.exports = mongoose.model("Cart", CartSchema);
module.exports.statusEnum = statusEnum;