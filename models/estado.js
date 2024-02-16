const mongoose = require("mongoose");
const schema = mongoose.Schema;

const estadoSchema = new schema({
    estadoId: {type: String},
    estadoNombre: {type: String},
}, {versionKey: false});

const Estado = mongoose.model('estado', estadoSchema);
module.exports = Estado;