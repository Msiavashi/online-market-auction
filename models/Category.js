var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({

    title: {
        type: String,
        trim: true,
        required: true
    },

    description: {
        type: String
    },

    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    }

});


module.exports = mongoose.model("Category", CategorySchema);