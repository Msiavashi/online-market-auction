
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({

    item: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Item",
        require: true
    },

    totalItem: {
        type: Number,
        default: 1,
        required: true
    }

});


module.exports = mongoose.model("Order", OrderSchema);
