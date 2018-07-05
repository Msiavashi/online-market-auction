var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StateSchema = new Schema({

    _id: {
        type: mongoose.SchemaTypes.ObjectId
    },

    name:{
        type: String,
        trim:true
    }
});


module.exports = mongoose.model("State", StateSchema);