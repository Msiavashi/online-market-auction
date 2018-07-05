var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaymentMethodSchema = new Schema({

    _id: {
        type: mongoose.SchemaTypes.ObjectId
    },

    title: {
        type: String, 
        required: true
    },

    description: {
        type: String
    }

});

module.exports = mongoose.model("PaymentMethod", PaymentMethodSchema);