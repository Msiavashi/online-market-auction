var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShipmentSchema = new Schema({
    
    title: {
        type: String, 
        required: true,
        // enum
    },

    description: {
        type: String
    },

    shipmentMethod: {
        type: mongoose.SchemaTypes.ObjectId
    },
    
    sendDate: {
        type: Date
    },

    receivedDate: {
        type: Date
    },

    status: {
        type: String,
        enum: ["IN_STORE", "READY_TO_SEND", "SENDT", "DELIVERED"]
    },

    cart: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Cart"
    }

});

module.exports = mongoose.model("ShipmentMethod", ShipmentMethodSchema);