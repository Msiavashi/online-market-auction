var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var titleEnum = {
    USER_CREDIT: "USER_CREDIT",
    ONLINE: "ONLINE",
    BANK_RECEIPT: "BANK_RECEIPT"
}

var PaymentMethodSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    method: {
        type: String,
        required: true,
        enum: [titleEnum.USER_CREDIT, titleEnum.ONLINE, titleEnum.BANK_RECEIPT] 
    },

    description: {
        type: String
    }

});

module.exports = mongoose.model("PaymentMethod", PaymentMethodSchema);