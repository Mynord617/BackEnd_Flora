const mongoose = require("mongoose");
const schema = mongoose.Schema;

const recomendacionSchema= new schema({
    recomendacionId: {type: String},
    recomendacionCultivoId: {type: String},
    recomendacionAnalisisId: {type: String},
    recomendacionProductoId: {type: String},
    recomendacionEstadoId: {type: String},
}, {versionKey: false});

const Recomendacion = mongoose.model('recomendacion', recomendacionSchema);
module.exports = Recomendacion;