const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');

router.post('/login', async (req, res) => {
    const { correo, password } = req.body;

    const _usuario = await Usuario.findOne({correo});
    if (!_usuario) {
        return res.status(404).json({error: 'Usuario no encontrado'});
    }
    const usuarioValido = await bcrypt.compare(password, _usuario.password);
    if (!usuarioValido) {
        return res.status(401).json({error: 'Contraseña Incorrecta'});
    }
    const token = jwt.sign({id: _usuario.id}, 'SECRET_KEY', {
        expiresIn: '1h'
    });
    res.json({token});
});

module.exports = router;
