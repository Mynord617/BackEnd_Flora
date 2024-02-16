const mongoose = require("mongoose");
const schema = mongoose.Schema;

const rolesSchema = new schema({
    rolesId: {type: String},
    rolesNombre: {type: String},
    rolEstado: {type: String},
}, {versionKey: false});

const Roles = mongoose.model('roles', rolesSchema);
module.exports = Roles;