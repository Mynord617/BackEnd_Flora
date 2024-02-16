const AnalisisClase = require('../models/analisisClase');

function agregarAnalisisClase(req, res) {
    const _analisisClase = new AnalisisClase({
        analisisClaseId: req.body.analisisClaseId,
        analisisClaseNombre: req.body.analisisClaseNombre
    });
    _analisisClase.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarAnalisisClase(req, res) {
    AnalisisClase.find({}).then(analisisClases => {
        if (analisisClases.length)
            return res.render('index', { AnalisisClases: analisisClases });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarAnalisisClase(req, res) {
    const id = req.body.id_editar;
    const analisisClaseId = req.body.editar_analisisClaseId;
    const analisisClaseNombre = req.body.editar_analisisClaseNombre;
    AnalisisClase.findByIdAndUpdate(id, {
        analisisClaseId: analisisClaseId,
        analisisClaseNombre: analisisClaseNombre
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_AnalisisClase(req, res) {
    const id = req.params.id;
    AnalisisClase.findById(id).then(analisisClase => {
        if (analisisClase)
            return res.render('analisisClase', { AnalisisClase: analisisClase });
        return res.status(404).send({ message: 'AnalisisClase not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_AnalisisClase(req, res) {
    const id = req.params.id;
    AnalisisClase.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarAnalisisClase,
    agregarAnalisisClase,
    actualizarAnalisisClase,
    eliminar_AnalisisClase,
    mostrar_por_id_AnalisisClase
};
