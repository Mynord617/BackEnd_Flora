const mongoose = require("mongoose");
const schema = mongoose.Schema;

const fenologiaSchema = new schema({
    fenologiaId: {type: String},
    fenologiaSiembraId: {type: String},
    fenologiaEstadoId: {type: String},
    fenologiaFechaEstadoAprox: {type: Date},
    fenologiaFechaEstadoCompleto: {type: Date},
    fenologiaEstado: {type: Boolean},
}, {versionKey: false});

const Fenologia = mongoose.model('fenologia', fenologiaSchema);
module.exports = Fenologia;