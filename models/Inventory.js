var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Guaranty = require('./Guaranty');
var Product = require("./Product");

var InventorySchema = new Schema({

    guaranty: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Guaranty"
    },

    quantity: {
        type: Number,
        required: true
    },

    product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Product",
        required: true
    },
});


module.exports = mongoose.model("Inventory", InventorySchema);