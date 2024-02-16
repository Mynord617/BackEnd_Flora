const Cultivos = require('../models/cultivos');

function agregarCultivo(req, res) {
    const _cultivo = new Cultivos({
        cultivoId: req.body.cultivoId,
        cultivoNombre: req.body.cultivoNombre,
        cultivoClasificacionId: req.body.cultivoClasificacionId,
        cultivoEstado: req.body.cultivoEstado
    });
    _cultivo.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarCultivo(req, res) {
    Cultivos.find({}).then(cultivos => {
        if (cultivos.length)
            return res.render('index', { Cultivos: cultivos });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarCultivo(req, res) {
    const id = req.body.id_editar;
    const cultivoId = req.body.editar_cultivoId;
    const cultivoNombre = req.body.editar_cultivoNombre;
    const cultivoClasificacionId = req.body.editar_cultivoClasificacionId;
    const cultivoEstado = req.body.editar_cultivoEstado;
    Cultivos.findByIdAndUpdate(id, {
        cultivoId: cultivoId,
        cultivoNombre: cultivoNombre,
        cultivoClasificacionId: cultivoClasificacionId,
        cultivoEstado: cultivoEstado
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_Cultivo(req, res) {
    const id = req.params.id;
    Cultivos.findById(id).then(cultivo => {
        if (cultivo)
            return res.render('cultivo', { Cultivo: cultivo });
        return res.status(404).send({ message: 'Cultivo not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_Cultivo(req, res) {
    const id = req.params.id;
    Cultivos.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarCultivo,
    agregarCultivo,
    actualizarCultivo,
    eliminar_Cultivo,
    mostrar_por_id_Cultivo
};
