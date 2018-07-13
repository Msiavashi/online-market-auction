var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Category = require('./Category');
var Manufacture = require('./Manufacture');
var Inventory = require('./Inventory');

var ProductSchema = new Schema({

    title: {
        type: String,
        trim: true,
        required: true,
        maxlength: 255
    },

    detail: Object,
    
    description: {
        type: String,
        required: true
    },

    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    },

    manufacture: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Manufacture"
    },


    inventory: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Inventory"
    },


    images: [{
        cover: {
            type: String
        },
        others: [{
            type: String
        }]
    }]


});


module.exports = mongoose.model("Product", ProductSchema);