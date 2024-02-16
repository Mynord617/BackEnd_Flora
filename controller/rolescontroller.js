const Roles = require('../models/roles');

function agregarRol(req, res) {
    const _rol = new Roles({
        rolesId: req.body.rolesId,
        rolesNombre: req.body.rolesNombre,
        rolEstado: req.body.rolEstado
    });
    _rol.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarRol(req, res) {
    Roles.find({}).then(roles => {
        if (roles.length)
            return res.render('index', { Roles: roles });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarRol(req, res) {
    const id = req.body.id_editar;
    const rolesId = req.body.editar_rolesId;
    const rolesNombre = req.body.editar_rolesNombre;
    const rolEstado = req.body.editar_rolEstado;
    Roles.findByIdAndUpdate(id, {
        rolesId: rolesId,
        rolesNombre: rolesNombre,
        rolEstado: rolEstado
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_Rol(req, res) {
    const id = req.params.id;
    Roles.findById(id).then(rol => {
        if (rol)
            return res.render('rol', { Rol: rol });
        return res.status(404).send({ message: 'Rol not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_Rol(req, res) {
    const id = req.params.id;
    Roles.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarRol,
    agregarRol,
    actualizarRol,
    eliminar_Rol,
    mostrar_por_id_Rol
};
