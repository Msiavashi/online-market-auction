var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaymentMethodSchema = new Schema({
    
    title: {
        type: Number, 
        required: true,
        enum: [0, 1, 2]     //["USER_CREDIT", "ONLINE", "BANK_RECEIPT"]
    },

    description: {
        type: String
    }

});

module.exports = mongoose.model("PaymentMethod", PaymentMethodSchema);