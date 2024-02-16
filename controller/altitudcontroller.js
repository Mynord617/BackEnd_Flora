const Altitud = require('../models/altitud');

function agregar(req, res) {
    const _altitud = new Altitud({
        altitudId: req.body.altitudId,
        altitudCalificacion: req.body.altitudCalificacion
    });
    _altitud.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizar(req, res) {
    Altitud.find({}).then(altitudes => {
        if (altitudes.length)
            return res.render('index', { Altitudes: altitudes });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizar(req, res) {
    const id = req.body.id_editar;
    const altitudId = req.body.editar_altitudId;
    const altitudCalificacion = req.body.editar_altitudCalificacion;
    Altitud.findByIdAndUpdate(id, {
        altitudId: altitudId,
        altitudCalificacion: altitudCalificacion
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id(req, res) {
    const id = req.params.id;
    Altitud.findById(id).then(altitud => {
        if (altitud)
            return res.render('altitud', { Altitud: altitud });
        return res.status(404).send({ message: 'Altitud not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar(req, res) {
    const id = req.params.id;
    Altitud.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar,
    agregar,
    actualizar,
    eliminar,
    mostrar_por_id
};
