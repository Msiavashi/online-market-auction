var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PaymentMehtod = require('./PaymentMethod');
var AddressSchema = new Schema({

    country: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Country",
        required: true
    },

    city: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Country",
        require: true
    },

    state: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Country",
        required: true
    },

    address: {
        type: String,
        required: true
    },

    postalCode: {
        type: String,
        required: true
    },

    User: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

});


module.exports = mongoose.model("Address", AddressSchema);