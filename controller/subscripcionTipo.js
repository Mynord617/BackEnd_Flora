const SubscripcionTipo = require('../models/subscripcionTipo');

function agregarSubscripcionTipo(req, res) {
    const _subscripcionTipo = new SubscripcionTipo({
        subscripcionTipoId: req.body.subscripcionTipoId,
        subscripcionTipoNombre: req.body.subscripcionTipoNombre,
        subscripcionEstado: req.body.subscripcionEstado
    });
    _subscripcionTipo.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarSubscripcionTipo(req, res) {
    SubscripcionTipo.find({}).then(subscripcionTipos => {
        if (subscripcionTipos.length)
            return res.render('index', { SubscripcionTipos: subscripcionTipos });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarSubscripcionTipo(req, res) {
    const id = req.body.id_editar;
    const subscripcionTipoId = req.body.editar_subscripcionTipoId;
    const subscripcionTipoNombre = req.body.editar_subscripcionTipoNombre;
    const subscripcionEstado = req.body.editar_subscripcionEstado;
    SubscripcionTipo.findByIdAndUpdate(id, {
        subscripcionTipoId: subscripcionTipoId,
        subscripcionTipoNombre: subscripcionTipoNombre,
        subscripcionEstado: subscripcionEstado
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_SubscripcionTipo(req, res) {
    const id = req.params.id;
    SubscripcionTipo.findById(id).then(subscripcionTipo => {
        if (subscripcionTipo)
            return res.render('subscripcionTipo', { SubscripcionTipo: subscripcionTipo });
        return res.status(404).send({ message: 'Subscripcion Tipo not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_SubscripcionTipo(req, res) {
    const id = req.params.id;
    SubscripcionTipo.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarSubscripcionTipo,
    agregarSubscripcionTipo,
    actualizarSubscripcionTipo,
    eliminar_SubscripcionTipo,
    mostrar_por_id_SubscripcionTipo
};
