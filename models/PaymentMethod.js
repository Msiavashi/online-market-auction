var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var titleEnum = {
    USER_CREDIT: 0,
    ONLINE: 1,
    BANK_RECEIPT: 2
}

var PaymentMethodSchema = new Schema({
    
    title: {
        type: Number, 
        required: true,
        enum: [titleEnum.USER_CREDIT, titleEnum.ONLINE, titleEnum.BANK_RECEIPT]     //["USER_CREDIT", "ONLINE", "BANK_RECEIPT"]
    },

    description: {
        type: String
    }

});

module.exports = mongoose.model("PaymentMethod", PaymentMethodSchema);