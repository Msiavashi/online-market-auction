var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var role = {
    admin: 0,
    supervisor: 1,
    customer: 2
}


var RoleSchema = new Schema({
    
    role: [
        {
            type: Number, 
            enum:[role.admin, role.supervisor, role.customer]    //["admin", "supervisor", "customer"]
        }
    ]

});

module.exports = mongoose.model("Role", RoleSchema);