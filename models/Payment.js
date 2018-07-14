var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PaymentMethod = require('./PaymentMethod');


var statusEnum = {
    UNPAID: 0,
    PAID: 1
}


var PaymentSchema = new Schema({

    user: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    
    guid: {
        type: String,
        maxlength: 50
    },

    amount: {
        type: Number,
        set: setAmount,
        get: getAmount
    },

    status: {
        type: Number,
        enum: [statusEnum.UNPAID, statusEnum.PAID],       //0: UNPAID, 1: PAID
        required: true,
        default: statusEnum.UNPAID
    },

    details: {
        type: String,
        trim: true
    },

    refId: {
        type: String,
    },
    
    saleOrderId:{
        type: String
    },
    
    SaleRefrenceId:{
        type: String
    },

    paymentMethod: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "PaymentMethod"
    },

});

// getters and setters

function getAmount(price){
    return (price / 1000).toFixed(3);
};


function setAmount(price){
    return price * 1000;
}


module.exports = mongoose.model("Payment", PaymentSchema);