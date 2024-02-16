const mongoose = require("mongoose");
const schema = mongoose.Schema;

const publicacionSchema = new schema({
    publicacionId: {type: String},
    publicacionSujeto: {type: String},
    publicacionImagen: {type: Blob},
    publicacionTexto: {type: String},
    publicacionFechaHora: {type: Date},
    publicacionUsuarioId: {type: String},
    publicacionEstado: {true: Boolean},
    publicacionTemaId: {true: String},
}, {versionKey: false});

const Publicacion = mongoose.model('publicacion', publicacionSchema);
module.exports = Publicacion;