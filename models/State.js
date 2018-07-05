var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StateSchema = new Schema({

    name:{
        type: String,
        trim:true
    }
});


module.exports = mongoose.model("State", StateSchema);