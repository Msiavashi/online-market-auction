var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Guarantee = require('./Guarantee');
var Category = require('./Category');
var Manufacture = require('./Manufacture');

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

    guaranties: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Guarantee"
    }]

});


module.exports = mongoose.model("Product", ProductSchema);