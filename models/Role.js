var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoleSchema = new Schema({
    
    role: [
        {
            type: Number, 
            enum:[0, 1, 2]    //["admin", "supervisor", "customer"]
        }
    ]

});

module.exports = mongoose.model("Role", RoleSchema);