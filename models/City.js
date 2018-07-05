
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitySchema = new Schema({

    _id: {
        type: mongoose.SchemaTypes.ObjectId
    },

    name: {
        type: String,
        trim: true
    }
});


module.exports = mongoose.model("City", CitySchema);