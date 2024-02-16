const mongoose = require("mongoose");
const schema = mongoose.Schema;

const temaSchema = new schema({
    temaId: {type: String},
    temaNombre: {type: String},
    temaEstado: {type: Boolean},
}, {versionKey: false});

const Tema = mongoose.model('tema', temaSchema);
module.exports = Tema;