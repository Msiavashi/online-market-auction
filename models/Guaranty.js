var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GuarantySchema = new Schema({

    name: {
        type: String,
        trim: true,
        required: true
    },

    description: {
        type: String
    },

    price: {
        type: Number,
        set: setPrice,
        get: getPrice
    }

});


// getters and setters

function getPrice(price){
    return (price / 1000).toFixed(3);
};


function setPrice(price){
    return price * 1000;
}
module.exports = mongoose.model("Guaranty", GuarantySchema);