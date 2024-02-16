const SubscripcionRegistros = require('../models/subscripcionRegistro');

function agregarSubscripcionRegistro(req, res) {
    const _subscripcionRegistro = new SubscripcionRegistros({
        subscripcionRegistroId: req.body.subscripcionRegistroId,
        subscripcionRegistroUsuarioId: req.body.subscripcionRegistroUsuarioId,
        subscripcionRegistroSubscripcionId: req.body.subscripcionRegistroSubscripcionId,
        subscripcionEstado: req.body.subscripcionEstado
    });
    _subscripcionRegistro.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarSubscripcionRegistro(req, res) {
    SubscripcionRegistros.find({}).then(subscripcionRegistros => {
        if (subscripcionRegistros.length)
            return res.render('index', { SubscripcionRegistros: subscripcionRegistros });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarSubscripcionRegistro(req, res) {
    const id = req.body.id_editar;
    const subscripcionRegistroId = req.body.editar_subscripcionRegistroId;
    const subscripcionRegistroUsuarioId = req.body.editar_subscripcionRegistroUsuarioId;
    const subscripcionRegistroSubscripcionId = req.body.editar_subscripcionRegistroSubscripcionId;
    const subscripcionEstado = req.body.editar_subscripcionEstado;
    SubscripcionRegistros.findByIdAndUpdate(id, {
        subscripcionRegistroId: subscripcionRegistroId,
        subscripcionRegistroUsuarioId: subscripcionRegistroUsuarioId,
        subscripcionRegistroSubscripcionId: subscripcionRegistroSubscripcionId,
        subscripcionEstado: subscripcionEstado
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_SubscripcionRegistro(req, res) {
    const id = req.params.id;
    SubscripcionRegistros.findById(id).then(subscripcionRegistro => {
        if (subscripcionRegistro)
            return res.render('subscripcionRegistro', { SubscripcionRegistro: subscripcionRegistro });
        return res.status(404).send({ message: 'Subscripcion Registro not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_SubscripcionRegistro(req, res) {
    const id = req.params.id;
    SubscripcionRegistros.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarSubscripcionRegistro,
    agregarSubscripcionRegistro,
    actualizarSubscripcionRegistro,
    eliminar_SubscripcionRegistro,
    mostrar_por_id_SubscripcionRegistro
};
