const EstadoCultivos = require('../models/estadoCultivos');

function agregarEstadoCultivo(req, res) {
    const _estadoCultivo = new EstadoCultivos({
        estadoCultivoId: req.body.estadoCultivoId,
        estadoCultivo_CultivoId: req.body.estadoCultivo_CultivoId,
        estadoCultivoEstadoId: req.body.estadoCultivoEstadoId,
        estadoCultivoDuracion: req.body.estadoCultivoDuracion
    });
    _estadoCultivo.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarEstadoCultivo(req, res) {
    EstadoCultivos.find({}).then(estadoCultivos => {
        if (estadoCultivos.length)
            return res.render('index', { EstadoCultivos: estadoCultivos });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarEstadoCultivo(req, res) {
    const id = req.body.id_editar;
    const estadoCultivoId = req.body.editar_estadoCultivoId;
    const estadoCultivo_CultivoId = req.body.editar_estadoCultivo_CultivoId;
    const estadoCultivoEstadoId = req.body.editar_estadoCultivoEstadoId;
    const estadoCultivoDuracion = req.body.editar_estadoCultivoDuracion;
    EstadoCultivos.findByIdAndUpdate(id, {
        estadoCultivoId: estadoCultivoId,
        estadoCultivo_CultivoId: estadoCultivo_CultivoId,
        estadoCultivoEstadoId: estadoCultivoEstadoId,
        estadoCultivoDuracion: estadoCultivoDuracion
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_EstadoCultivo(req, res) {
    const id = req.params.id;
    EstadoCultivos.findById(id).then(estadoCultivo => {
        if (estadoCultivo)
            return res.render('estadoCultivo', { EstadoCultivo: estadoCultivo });
        return res.status(404).send({ message: 'EstadoCultivo not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_EstadoCultivo(req, res) {
    const id = req.params.id;
    EstadoCultivos.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarEstadoCultivo,
    agregarEstadoCultivo,
    actualizarEstadoCultivo,
    eliminar_EstadoCultivo,
    mostrar_por_id_EstadoCultivo
};
