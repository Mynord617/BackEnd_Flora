const Tema = require('../models/tema');

function agregarTema(req, res) {
    const _tema = new Tema({
        temaId: req.body.temaId,
        temaNombre: req.body.temaNombre,
        temaEstado: req.body.temaEstado
    });
    _tema.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarTema(req, res) {
    Tema.find({}).then(temas => {
        if (temas.length)
            return res.render('index', { Temas: temas });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarTema(req, res) {
    const id = req.body.id_editar;
    const temaId = req.body.editar_temaId;
    const temaNombre = req.body.editar_temaNombre;
    const temaEstado = req.body.editar_temaEstado;
    Tema.findByIdAndUpdate(id, {
        temaId: temaId,
        temaNombre: temaNombre,
        temaEstado: temaEstado
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_Tema(req, res) {
    const id = req.params.id;
    Tema.findById(id).then(tema => {
        if (tema)
            return res.render('tema', { Tema: tema });
        return res.status(404).send({ message: 'Tema not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_Tema(req, res) {
    const id = req.params.id;
    Tema.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarTema,
    agregarTema,
    actualizarTema,
    eliminar_Tema,
    mostrar_por_id_Tema
};
