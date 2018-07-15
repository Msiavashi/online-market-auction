var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleEnum = {
    ADMIN: "ADMIN",
    SUPERVISOR: "SUPERVISOR",
    CUSTOMER: "CUSTOMER"
}


var RoleSchema = new Schema({
    
    name: {
        type: String,
        trim: true,
        required: true
    },

    role: {
        type: String, 
        enum:[roleEnum.ADMIN, roleEnum.SUPERVISOR, roleEnum.CUSTOMER],
        required: true
    }

});

module.exports = mongoose.model("Role", RoleSchema);
module.exports.roleEnum = roleEnum;