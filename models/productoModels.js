const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productoSchema = new schema({
    productoId: {type: String},
    productoNombre: {type: String},
    productoPrecio: {type: String},
    productoCantidad: {type: Number},
    productoCategoriaId: {type: String},
    productoEstado: {type: String},
}, {versionKey: false});

const Productos = mongoose.model('producto', productoSchema);
module.exports = Productos;