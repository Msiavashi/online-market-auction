
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShipmentMethodSchema = new Schema({
    
    title: {
        type: String, 
        required: true,
        // use enum
    },

    description: {
        type: String
    }

});

module.exports = mongoose.model("ShipmentMethod", ShipmentMethodSchema);