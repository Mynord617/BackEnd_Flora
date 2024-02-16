const Recomendacion = require('../models/recomendacion');

function agregarRecomendacion(req, res) {
    const _recomendacion = new Recomendacion({
        recomendacionId: req.body.recomendacionId,
        recomendacionCultivoId: req.body.recomendacionCultivoId,
        recomendacionAnalisisId: req.body.recomendacionAnalisisId,
        recomendacionProductoId: req.body.recomendacionProductoId,
        recomendacionEstadoId: req.body.recomendacionEstadoId
    });
    _recomendacion.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarRecomendacion(req, res) {
    Recomendacion.find({}).then(recomendaciones => {
        if (recomendaciones.length)
            return res.render('index', { Recomendaciones: recomendaciones });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarRecomendacion(req, res) {
    const id = req.body.id_editar;
    const recomendacionId = req.body.editar_recomendacionId;
    const recomendacionCultivoId = req.body.editar_recomendacionCultivoId;
    const recomendacionAnalisisId = req.body.editar_recomendacionAnalisisId;
    const recomendacionProductoId = req.body.editar_recomendacionProductoId;
    const recomendacionEstadoId = req.body.editar_recomendacionEstadoId;
    Recomendacion.findByIdAndUpdate(id, {
        recomendacionId: recomendacionId,
        recomendacionCultivoId: recomendacionCultivoId,
        recomendacionAnalisisId: recomendacionAnalisisId,
        recomendacionProductoId: recomendacionProductoId,
        recomendacionEstadoId: recomendacionEstadoId
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_Recomendacion(req, res) {
    const id = req.params.id;
    Recomendacion.findById(id).then(recomendacion => {
        if (recomendacion)
            return res.render('recomendacion', { Recomendacion: recomendacion });
        return res.status(404).send({ message: 'Recomendacion not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_Recomendacion(req, res) {
    const id = req.params.id;
    Recomendacion.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarRecomendacion,
    agregarRecomendacion,
    actualizarRecomendacion,
    eliminar_Recomendacion,
    mostrar_por_id_Recomendacion
};
