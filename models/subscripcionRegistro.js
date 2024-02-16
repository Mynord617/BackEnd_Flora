const mongoose = require("mongoose");
const schema = mongoose.Schema;

const subscripcionRegistroSchema = new schema({
    subscripcionRegistroId: {type: String},
    subscripcionRegistroUsuarioId: {type: String},
    subscripcionRegistroSubscripcionId: {type: String},
    subscripcionEstado: {type: Boolean},
}, {versionKey: false});

const SubscripcionRegistros = mongoose.model('subscripcionRegistro', subscripcionRegistroSchema);
module.exports = SubscripcionRegistros;