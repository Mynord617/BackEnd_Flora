const mongoose = require("mongoose");
const schema = mongoose.Schema;

const estadoCultivoSchema = new schema({
    estadoCultivoId: {type: String},
    estadoCultivo_CultivoId: {type: String},
    estadoCultivoEstadoId: {type: String},
    estadoCultivoDuracion: {type: String},
}, {versionKey: false});

const EstadoCultivos = mongoose.model('estadoCultivo', estadoCultivoSchema);
module.exports = EstadoCultivos;