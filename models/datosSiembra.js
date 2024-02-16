const mongoose = require("mongoose");
const schema = mongoose.Schema;

const datoSiembraSchema = new schema({
    datoSiembra: {type: String},
    datoSiembraAltitud: {type: String},
    datoSiembraPh: {type: String},
    datoSiembraAnalisisId: {type: String},
    datoSiembraEstadoId: {type: String},
    datoSiembraRecomendacionId: {type: String},
    datoSiembraUsuarioId: {type: String},
    datoSiembraEstado: {type: String},
}, {versionKey: false});

const DatoSiembras = mongoose.model('datoSiembra', datoSiembraSchema);
module.exports = DatoSiembras;