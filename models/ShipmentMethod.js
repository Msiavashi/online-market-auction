
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var titleEnum = {
    POST: "POST",
    FREIGHT: "FREIGHT",
    DELIVITY_MAN: "DELIVERY_MAN"
}

var ShipmentMethodSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },

    method: {
        type: String,
        required: true,
        enum: [titleEnum.POST, titleEnum.FREIGHT, titleEnum.DELIVITY_MAN]
    },

    description: {
        type: String
    }


});

module.exports = mongoose.model("ShipmentMethod", ShipmentMethodSchema);