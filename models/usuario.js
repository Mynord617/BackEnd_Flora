const mongoose = require("mongoose");

const schema = mongoose.Schema;

const usuarioSchema = new schema({
  nombre: {
    type: String,
    require: false,
    unique: true,
  },
  apellido: {
    type: String,
    require: false,
    unique: false,
  },
  correo: {
    type: String,
    require: false,
    unique: true,
  },
  password: {
    type: String,
    require: false,
  },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);
module.exports = Usuario;
