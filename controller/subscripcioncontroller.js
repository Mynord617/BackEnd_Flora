const Subscripcion = require('../models/subscripcion');

function agregarSubscripcion(req, res) {
    const _subscripcion = new Subscripcion({
        subscripcionId: req.body.subscripcionId,
        subscripcionNombre: req.body.subscripcionNombre,
        subscripcionTipoId: req.body.subscripcionTipoId,
        subscripcionValor: req.body.subscripcionValor,
        subscripcionEstado: req.body.subscripcionEstado
    });
    _subscripcion.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarSubscripcion(req, res) {
    Subscripcion.find({}).then(subscripciones => {
        if (subscripciones.length)
            return res.render('index', { Subscripciones: subscripciones });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarSubscripcion(req, res) {
    const id = req.body.id_editar;
    const subscripcionId = req.body.editar_subscripcionId;
    const subscripcionNombre = req.body.editar_subscripcionNombre;
    const subscripcionTipoId = req.body.editar_subscripcionTipoId;
    const subscripcionValor = req.body.editar_subscripcionValor;
    const subscripcionEstado = req.body.editar_subscripcionEstado;
    Subscripcion.findByIdAndUpdate(id, {
        subscripcionId: subscripcionId,
        subscripcionNombre: subscripcionNombre,
        subscripcionTipoId: subscripcionTipoId,
        subscripcionValor: subscripcionValor,
        subscripcionEstado: subscripcionEstado
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_Subscripcion(req, res) {
    const id = req.params.id;
    Subscripcion.findById(id).then(subscripcion => {
        if (subscripcion)
            return res.render('subscripcion', { Subscripcion: subscripcion });
        return res.status(404).send({ message: 'Subscripcion not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_Subscripcion(req, res) {
    const id = req.params.id;
    Subscripcion.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarSubscripcion,
    agregarSubscripcion,
    actualizarSubscripcion,
    eliminar_Subscripcion,
    mostrar_por_id_Subscripcion
};
