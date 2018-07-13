var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlanSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },

    description: {
        type: String,
    }

});


module.exports = mongoose.model("Plan", PlanSchema);