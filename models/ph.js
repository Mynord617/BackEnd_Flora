const mongoose = require("mongoose");
const schema = mongoose.Schema;

const phSchema = new schema({
    phId: {type: String},
    phNombre: {type: String},
    phEstado: {type: Boolean},
}, {versionKey: false});

const PH = mongoose.model('subscripcionTipo', phSchema);
module.exports = PH;