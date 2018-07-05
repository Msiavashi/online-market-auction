var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaymentMethodSchema = new Schema({
    
    title: {
        type: String, 
        required: true
    },

    description: {
        type: String
    }

});

module.exports = mongoose.model("PaymentMethod", PaymentMethodSchema);