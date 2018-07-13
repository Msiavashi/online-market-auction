var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ManufactureSchema = new Schema({

    name: {
        type: String,
        trim: true
    },

    description: {
        type: String,
    }
});


module.exports = mongoose.model("Manufacture", ManufactureSchema);