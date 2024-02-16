const DatoSiembras = require('../models/datoSiembras');

function agregarDatoSiembra(req, res) {
    const _datoSiembra = new DatoSiembras({
        datoSiembra: req.body.datoSiembra,
        datoSiembraAltitud: req.body.datoSiembraAltitud,
        datoSiembraPh: req.body.datoSiembraPh,
        datoSiembraAnalisisId: req.body.datoSiembraAnalisisId,
        datoSiembraEstadoId: req.body.datoSiembraEstadoId,
        datoSiembraRecomendacionId: req.body.datoSiembraRecomendacionId,
        datoSiembraUsuarioId: req.body.datoSiembraUsuarioId,
        datoSiembraEstado: req.body.datoSiembraEstado
    });
    _datoSiembra.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarDatoSiembra(req, res) {
    DatoSiembras.find({}).then(datoSiembras => {
        if (datoSiembras.length)
            return res.render('index', { DatoSiembras: datoSiembras });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarDatoSiembra(req, res) {
    const id = req.body.id_editar;
    const datoSiembra = req.body.editar_datoSiembra;
    const datoSiembraAltitud = req.body.editar_datoSiembraAltitud;
    const datoSiembraPh = req.body.editar_datoSiembraPh;
    const datoSiembraAnalisisId = req.body.editar_datoSiembraAnalisisId;
    const datoSiembraEstadoId = req.body.editar_datoSiembraEstadoId;
    const datoSiembraRecomendacionId = req.body.editar_datoSiembraRecomendacionId;
    const datoSiembraUsuarioId = req.body.editar_datoSiembraUsuarioId;
    const datoSiembraEstado = req.body.editar_datoSiembraEstado;
    DatoSiembras.findByIdAndUpdate(id, {
        datoSiembra: datoSiembra,
        datoSiembraAltitud: datoSiembraAltitud,
        datoSiembraPh: datoSiembraPh,
        datoSiembraAnalisisId: datoSiembraAnalisisId,
        datoSiembraEstadoId: datoSiembraEstadoId,
        datoSiembraRecomendacionId: datoSiembraRecomendacionId,
        datoSiembraUsuarioId: datoSiembraUsuarioId,
        datoSiembraEstado: datoSiembraEstado
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_DatoSiembra(req, res) {
    const id = req.params.id;
    DatoSiembras.findById(id).then(datoSiembra => {
        if (datoSiembra)
            return res.render('datoSiembra', { DatoSiembra: datoSiembra });
        return res.status(404).send({ message: 'DatoSiembra not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_DatoSiembra(req, res) {
    const id = req.params.id;
    DatoSiembras.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarDatoSiembra,
    agregarDatoSiembra,
    actualizarDatoSiembra,
    eliminar_DatoSiembra,
    mostrar_por_id_DatoSiembra
};
