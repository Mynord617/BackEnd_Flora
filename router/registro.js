const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Usuario = require("../models/usuario");

// Ruta para registrarse
router.post("/registro", async (req, res) => {
  const { nombre, apellido, correo, password } = req.body;

  // Validación de datos
  if (!nombre ||!apellido ||!correo || !password) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  // Encriptación de la contraseña
  const encriptadoPassword = await bcrypt.hash(password, 10);

  const user = new Usuario({
    nombre,
    apellido,
    correo,
    password: encriptadoPassword,
  });
  try {
    await user.save();
    // Generación del token JWT
    const token = jwt.sign({ id: user._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(201).json({
      success: true,
      token,
      usuario: {
        nombre: user.nombre,
        apellido: user.apellido,
        correo: user.correo,
        password: user.password
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar el usuario" });
  }

  res.json({ message: "Usuario registrado correctamente" });
});

module.exports = router;
