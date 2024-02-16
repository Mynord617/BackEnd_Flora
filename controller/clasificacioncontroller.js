const Clasificacion = require('../models/clasificacion');

function agregarClasificacion(req, res) {
    const _clasificacion = new Clasificacion({
        clasificacionId: req.body.clasificacionId,
        clasificacionNombre: req.body.clasificacionNombre,
        clasificacionEstado: req.body.clasificacionEstado
    });
    _clasificacion.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarClasificacion(req, res) {
    Clasificacion.find({}).then(clasificaciones => {
        if (clasificaciones.length)
            return res.render('index', { Clasificaciones: clasificaciones });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarClasificacion(req, res) {
    const id = req.body.id_editar;
    const clasificacionId = req.body.editar_clasificacionId;
    const clasificacionNombre = req.body.editar_clasificacionNombre;
    const clasificacionEstado = req.body.editar_clasificacionEstado;
    Clasificacion.findByIdAndUpdate(id, {
        clasificacionId: clasificacionId,
        clasificacionNombre: clasificacionNombre,
        clasificacionEstado: clasificacionEstado
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_Clasificacion(req, res) {
    const id = req.params.id;
    Clasificacion.findById(id).then(clasificacion => {
        if (clasificacion)
            return res.render('clasificacion', { Clasificacion: clasificacion });
        return res.status(404).send({ message: 'Clasificacion not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_Clasificacion(req, res) {
    const id = req.params.id;
    Clasificacion.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarClasificacion,
    agregarClasificacion,
    actualizarClasificacion,
    eliminar_Clasificacion,
    mostrar_por_id_Clasificacion
};
