var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoleSchema = new Schema({
    
    role: [
        {
            type: String, 
            enum:["admin", "supervisor", "customer"]
        }
    ]

});

module.exports = mongoose.model("Role", RoleSchema);