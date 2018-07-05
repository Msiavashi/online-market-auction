var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountrySchema = new Schema({

    name:{
        type: String,
        trim:true
    }
});


module.exports = mongoose.model("Country", CountrySchema);