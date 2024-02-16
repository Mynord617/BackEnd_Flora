const mongoose = require("mongoose");
const schema = mongoose.Schema;

const subscripcionTipoSchema = new schema({
    subscripcionTipoId: {type: String},
    subscripcionTipoNombre: {type: String},
    subscripcionEstado: {type: Boolean},
}, {versionKey: false});

const SubscripcionTipo = mongoose.model('subscripcionTipo', subscripcionTipoSchema);
module.exports = SubscripcionTipo;