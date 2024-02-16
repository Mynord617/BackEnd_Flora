const TipoCultivo = require('../models/tipoCultivo');

function agregarTipoCultivo(req, res) {
    const _tipoCultivo = new TipoCultivo({
        tipoCultivoId: req.body.tipoCultivoId,
        tipoCultivoNombre: req.body.tipoCultivoNombre,
        tipoCultivo_CultivoId: req.body.tipoCultivo_CultivoId,
        tipoEstado: req.body.tipoEstado
    });
    _tipoCultivo.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarTipoCultivo(req, res) {
    TipoCultivo.find({}).then(tipoCultivos => {
        if (tipoCultivos.length)
            return res.render('index', { TipoCultivos: tipoCultivos });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarTipoCultivo(req, res) {
    const id = req.body.id_editar;
    const tipoCultivoId = req.body.editar_tipoCultivoId;
    const tipoCultivoNombre = req.body.editar_tipoCultivoNombre;
    const tipoCultivo_CultivoId = req.body.editar_tipoCultivo_CultivoId;
    const tipoEstado = req.body.editar_tipoEstado;
    TipoCultivo.findByIdAndUpdate(id, {
        tipoCultivoId: tipoCultivoId,
        tipoCultivoNombre: tipoCultivoNombre,
        tipoCultivo_CultivoId: tipoCultivo_CultivoId,
        tipoEstado: tipoEstado
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_TipoCultivo(req, res) {
    const id = req.params.id;
    TipoCultivo.findById(id).then(tipoCultivo => {
        if (tipoCultivo)
            return res.render('tipoCultivo', { TipoCultivo: tipoCultivo });
        return res.status(404).send({ message: 'Tipo Cultivo not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_TipoCultivo(req, res) {
    const id = req.params.id;
    TipoCultivo.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarTipoCultivo,
    agregarTipoCultivo,
    actualizarTipoCultivo,
    eliminar_TipoCultivo,
    mostrar_por_id_TipoCultivo
};
