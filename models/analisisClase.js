const mongoose = require("mongoose");
const schema = mongoose.Schema;

const analisisClaseSchema = new schema({
    analisisClaseId: {type: String},
    analisisClaseNombre: {type: String},
}, {versionKey: false});

const AnalisisClase = mongoose.model('analisisClase', analisisClaseSchema);
module.exports = AnalisisClase;