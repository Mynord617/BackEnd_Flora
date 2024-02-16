const PH = require('../models/ph');

function agregarPH(req, res) {
    const _ph = new PH({
        phId: req.body.phId,
        phNombre: req.body.phNombre,
        phEstado: req.body.phEstado
    });
    _ph.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarPH(req, res) {
    PH.find({}).then(phs => {
        if (phs.length)
            return res.render('index', { PHs: phs });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarPH(req, res) {
    const id = req.body.id_editar;
    const phId = req.body.editar_phId;
    const phNombre = req.body.editar_phNombre;
    const phEstado = req.body.editar_phEstado;
    PH.findByIdAndUpdate(id, {
        phId: phId,
        phNombre: phNombre,
        phEstado: phEstado
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_PH(req, res) {
    const id = req.params.id;
    PH.findById(id).then(ph => {
        if (ph)
            return res.render('ph', { PH: ph });
        return res.status(404).send({ message: 'PH not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_PH(req, res) {
    const id = req.params.id;
    PH.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarPH,
    agregarPH,
    actualizarPH,
    eliminar_PH,
    mostrar_por_id_PH
};
