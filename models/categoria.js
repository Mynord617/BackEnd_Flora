const mongoose = require("mongoose");
const schema = mongoose.Schema;

const categoriaSchema = new schema({
    categoriaId: {type: String},
    categoriaNombre: {type: String},
    categoriaEstado: {type: Boolean},
}, {versionKey: false});

const Categorias = mongoose.model('categoria', categoriaSchema);
module.exports = Categorias;