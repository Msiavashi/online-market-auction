var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Cart = require('./Cart');
var ShipmentMethod = require("./ShipmentMethod");
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
        type: mongoose.SchemaTypes.ObjectId,
        ref: "ShipmentMethod"
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

module.exports = mongoose.model("ShipmentSchema", ShipmentSchema);