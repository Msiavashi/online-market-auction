var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Cart = require('./Cart');
var ShipmentMethod = require("./ShipmentMethod");

var status = {
    IN_STORE: 0,
    READY_TO_SEND: 1,
    SENT: 2,
    DELIVERED: 3
}

var ShipmentSchema = new Schema({
    
    title: {
        type: String, 
        required: true,
        // enum
    },

    status: {
        type: Number,
        enum: [status.IN_STORE, status.READY_TO_SEND, status.SENT, status.DELIVERED],
        default: status.IN_STORE
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

    cart: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Cart"
    }

});

module.exports = mongoose.model("ShipmentSchema", ShipmentSchema);