const mongoose = require("mongoose");
const schema = mongoose.Schema;

const cultivoSchema = new schema({
    cultivoId: {type: String},
    cultivoNombre: {type: String},
    cultivoClasificacionId: {type: String},
    cultivoEstado: {type: Boolean},
}, {versionKey: false});

const Cultivos = mongoose.model('cultivo', cultivoSchema);
module.exports = Cultivos;