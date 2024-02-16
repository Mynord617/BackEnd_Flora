const mongoose = require("mongoose");
const schema = mongoose.Schema;

const analisisSchema = new schema({
    analisisId: {type: String},
    analisisAltitudCultivoId: {type: String},
    analisisPhId: {type: String},
    analisisClaseId: {type: String},
}, {versionKey: false});

const Analisis = mongoose.model('analisis', analisisSchema);
module.exports = Analisis;