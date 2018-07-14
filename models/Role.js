var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleEnum = {
    admin: 0,
    supervisor: 1,
    customer: 2
}


var RoleSchema = new Schema({
    
    role: {
        type: Number, 
        enum:[roleEnum.admin, roleEnum.supervisor, roleEnum.customer]    //["admin", "supervisor", "customer"]
    }

});

module.exports = mongoose.model("Role", RoleSchema);