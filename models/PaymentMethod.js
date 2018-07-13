var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaymentMethodSchema = new Schema({
    
    title: {
        type: String, 
        required: true,
        enum: ["USER_CREDIT", "ONLINE", "BANK_RECEIPT"]
    },

    description: {
        type: String
    }

});

module.exports = mongoose.model("PaymentMethod", PaymentMethodSchema);