const Analisis = require('../models/analisis');

function agregarAnalisis(req, res) {
    const _analisis = new Analisis({
        analisisId: req.body.analisisId,
        analisisAltitudCultivoId: req.body.analisisAltitudCultivoId,
        analisisPhId: req.body.analisisPhId,
        analisisClaseId: req.body.analisisClaseId
    });
    _analisis.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarAnalisis(req, res) {
    Analisis.find({}).then(analisis => {
        if (analisis.length)
            return res.render('index', { Analisis: analisis });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarAnalisis(req, res) {
    const id = req.body.id_editar;
    const analisisId = req.body.editar_analisisId;
    const analisisAltitudCultivoId = req.body.editar_analisisAltitudCultivoId;
    const analisisPhId = req.body.editar_analisisPhId;
    const analisisClaseId = req.body.editar_analisisClaseId;
    Analisis.findByIdAndUpdate(id, {
        analisisId: analisisId,
        analisisAltitudCultivoId: analisisAltitudCultivoId,
        analisisPhId: analisisPhId,
        analisisClaseId: analisisClaseId
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_Analisis(req, res) {
    const id = req.params.id;
    Analisis.findById(id).then(analisis => {
        if (analisis)
            return res.render('analisis', { Analisis: analisis });
        return res.status(404).send({ message: 'Analisis no responde' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_Analisis(req, res) {
    const id = req.params.id;
    Analisis.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarAnalisis,
    agregarAnalisis,
    actualizarAnalisis,
    eliminar_Analisis,
    mostrar_por_id_Analisis
};
