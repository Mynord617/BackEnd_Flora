const mongoose = require("mongoose");
const schema = mongoose.Schema;

const altitudCultivo = new schema({
    altitudCultivoId: {type: String},
    altitudCultivo_CultivoId: {type: String},
    altitudCultivoRangoInicial: {type: Number},
    altitudCultivoRangoFinal: {type: Number},
    altitudCultivoNombre: {type: String},
}, {versionKey: false});

const AltitudCultivo = mongoose.model('altitudcultivo', altitudCultivo);
module.exports = AltitudCultivo;