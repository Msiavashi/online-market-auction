var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var title = {
    USER_CREDIT: 0,
    ONLINE: 1,
    BANK_RECEIPT: 2
}

var PaymentMethodSchema = new Schema({
    
    title: {
        type: Number, 
        required: true,
        enum: [title.USER_CREDIT, title.ONLINE, title.BANK_RECEIPT]     //["USER_CREDIT", "ONLINE", "BANK_RECEIPT"]
    },

    description: {
        type: String
    }

});

module.exports = mongoose.model("PaymentMethod", PaymentMethodSchema);