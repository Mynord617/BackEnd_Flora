const mongoose = require("mongoose");
const schema = mongoose.Schema;

const clasificacionSchema = new schema({
    clasificacionId: {type: String},
    clasificacionNombre: {type: String},
    clasificacionEstado: {type: Boolean},
}, {versionKey: false});

const Clasificacion = mongoose.model('clasificacion', clasificacionSchema);
module.exports = Clasificacion;