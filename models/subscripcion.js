const mongoose = require("mongoose");
const schema = mongoose.Schema;

const subscripcionSchema = new schema({
    subscripcionId: {type: String},
    subscripcionNombre: {type: String},
    subscripcionTipoId: {type: String},
    subscripcionValor: {type: Float32Array},
    subscripcionEstado: {type: Boolean},
}, {versionKey: false});

const Subscripcion = mongoose.model('subscripcion', subscripcionSchema);
module.exports = Subscripcion;