const AltitudCultivo = require('../models/altitudCultivo');

function agregarAltitudCultivo(req, res) {
    const _altitudCultivo = new AltitudCultivo({
        altitudCultivoId: req.body.altitudCultivoId,
        altitudCultivo_CultivoId: req.body.altitudCultivo_CultivoId,
        altitudCultivoRangoInicial: req.body.altitudCultivoRangoInicial,
        altitudCultivoRangoFinal: req.body.altitudCultivoRangoFinal,
        altitudCultivoNombre: req.body.altitudCultivoNombre
    });
    _altitudCultivo.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarAltitudCultivo(req, res) {
    AltitudCultivo.find({}).then(altitudes => {
        if (altitudes.length)
            return res.render('index', { Altitudes: altitudes });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarAltitudCultivo(req, res) {
    const altitudCultivoId = req.body.editar_altitudCultivoId;
    const altitudCultivo_CultivoId = req.body.editar_altitudCultivo_CultivoId;
    const altitudCultivoRangoInicial = req.body.editar_altitudCultivoRangoInicial;
    const altitudCultivoRangoFinal = req.body.editar_altitudCultivoRangoFinal;
    const altitudCultivoNombre = req.body.editar_altitudCultivoNombre;
    AltitudCultivo.findByIdAndUpdate(id, {
        altitudCultivoId: altitudCultivoId,
        altitudCultivo_CultivoId: altitudCultivo_CultivoId,
        altitudCultivoRangoInicial: altitudCultivoRangoInicial,
        altitudCultivoRangoFinal: altitudCultivoRangoFinal,
        altitudCultivoNombre: altitudCultivoNombre
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_AltitudCultivo(req, res) {
    const id = req.params.id;
    AltitudCultivo.findById(id).then(altitud => {
        if (altitud)
            return res.render('altitudCultivo', { Altitud: altitud });
        return res.status(404).send({ message: 'AltitudCultivo no responde' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_AltitudCultivo(req, res) {
    const id = req.params.id;
    AltitudCultivo.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarAltitudCultivo,
    agregarAltitudCultivo,
    actualizarAltitudCultivo,
    eliminar_AltitudCultivo,
    mostrar_por_id_AltitudCultivo
};
