const Usuarios = require('../models/usuario');

function agregarUsuario(req, res) {
    const _usuario = new Usuarios({
        usuarioId: req.body.usuarioId,
        usuarioNombre: req.body.usuarioNombre,
        usuarioApellido: req.body.usuarioApellido,
        usuarioCorreo: req.body.usuarioCorreo,
        usuarioContraseña: req.body.usuarioContraseña,
        usuarioRol: req.body.usuarioRol,
        usuarioEstado: req.body.usuarioEstado
    });
    _usuario.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarUsuarios(req, res) {
    Usuarios.find({}).then(usuarios => {
        if (usuarios.length)
            return res.render('index', { Usuarios: usuarios });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarUsuario(req, res) {
    const id = req.body.id_editar;
    const usuarioId = req.body.editar_usuarioId;
    const usuarioNombre = req.body.editar_usuarioNombre;
    const usuarioApellido = req.body.editar_usuarioApellido;
    const usuarioCorreo = req.body.editar_usuarioCorreo;
    const usuarioContraseña = req.body.editar_usuarioContraseña;
    const usuarioRol = req.body.editar_usuarioRol;
    const usuarioEstado = req.body.editar_usuarioEstado;
    Usuarios.findByIdAndUpdate(id, {
        usuarioId: usuarioId,
        usuarioNombre: usuarioNombre,
        usuarioApellido: usuarioApellido,
        usuarioCorreo: usuarioCorreo,
        usuarioContraseña: usuarioContraseña,
        usuarioRol: usuarioRol,
        usuarioEstado: usuarioEstado
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_Usuario(req, res) {
    const id = req.params.id;
    Usuarios.findById(id).then(usuario => {
        if (usuario)
            return res.render('usuario', { Usuario: usuario });
        return res.status(404).send({ message: 'Usuario not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_Usuario(req, res) {
    const id = req.params.id;
    Usuarios.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarUsuarios,
    agregarUsuario,
    actualizarUsuario,
    eliminar_Usuario,
    mostrar_por_id_Usuario
};
