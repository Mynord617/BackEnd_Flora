const Estado = require('../models/estado');

function agregarEstado(req, res) {
    const _estado = new Estado({
        estadoId: req.body.estadoId,
        estadoNombre: req.body.estadoNombre
    });
    _estado.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarEstado(req, res) {
    Estado.find({}).then(estados => {
        if (estados.length)
            return res.render('index', { Estados: estados });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarEstado(req, res) {
    const id = req.body.id_editar;
    const estadoId = req.body.editar_estadoId;
    const estadoNombre = req.body.editar_estadoNombre;
    Estado.findByIdAndUpdate(id, {
        estadoId: estadoId,
        estadoNombre: estadoNombre
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_Estado(req, res) {
    const id = req.params.id;
    Estado.findById(id).then(estado => {
        if (estado)
            return res.render('estado', { Estado: estado });
        return res.status(404).send({ message: 'Estado not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_Estado(req, res) {
    const id = req.params.id;
    Estado.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarEstado,
    agregarEstado,
    actualizarEstado,
    eliminar_Estado,
    mostrar_por_id_Estado
};
