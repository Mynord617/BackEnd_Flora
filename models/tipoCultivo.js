const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tipoCultivoSchema = new schema({
    tipoCultivoId: {type: String},
    tipoCultivoNombre: {type: String},
    tipoCultivo_CultivoId: {type: String},
    tipoEstado: {type: Boolean}
}, {versionKey: false});

const TipoCultivo = mongoose.model('tipoCultivo', tipoCultivoSchema);
module.exports = TipoCultivo;