var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Inventory = require("./Inventory");

var ItemSchema = new Schema({

    inventory: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Inventory"
    },

    price: {
        type: Number,
        set: setPrice,
        get: getPrice,
        required: true
    },

    discount: {
        type: Number,
        set: setPrice,
        get: getPrice,
        default: 0
    }

});

// getters and setters
function getPrice(price){
    return (price / 1000).toFixed(3);
};


function setPrice(price){
    return price * 1000;
}


module.exports = mongoose.model("Item", ItemSchema);