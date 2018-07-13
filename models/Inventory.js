var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Guaranty = require('./Guaranty');

var InventorySchema = new Schema({

    guaranty: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Guaranty"
    },

    poduct: {
        type: mongoose.SchemaTypes.ObjectId
    },

    quantity: {
        type: Number,
        required: true
    }


});


module.exports = mongoose.model("Inventory", InventorySchema);