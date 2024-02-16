const Fenologia = require('../models/fenologia');

function agregarFenologia(req, res) {
    const _fenologia = new Fenologia({
        fenologiaId: req.body.fenologiaId,
        fenologiaSiembraId: req.body.fenologiaSiembraId,
        fenologiaEstadoId: req.body.fenologiaEstadoId,
        fenologiaFechaEstadoAprox: req.body.fenologiaFechaEstadoAprox,
        fenologiaFechaEstadoCompleto: req.body.fenologiaFechaEstadoCompleto,
        fenologiaEstado: req.body.fenologiaEstado
    });
    _fenologia.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarFenologia(req, res) {
    Fenologia.find({}).then(fenologias => {
        if (fenologias.length)
            return res.render('index', { Fenologias: fenologias });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarFenologia(req, res) {
    const id = req.body.id_editar;
    const fenologiaId = req.body.editar_fenologiaId;
    const fenologiaSiembraId = req.body.editar_fenologiaSiembraId;
    const fenologiaEstadoId = req.body.editar_fenologiaEstadoId;
    const fenologiaFechaEstadoAprox = req.body.editar_fenologiaFechaEstadoAprox;
    const fenologiaFechaEstadoCompleto = req.body.editar_fenologiaFechaEstadoCompleto;
    const fenologiaEstado = req.body.editar_fenologiaEstado;
    Fenologia.findByIdAndUpdate(id, {
        fenologiaId: fenologiaId,
        fenologiaSiembraId: fenologiaSiembraId,
        fenologiaEstadoId: fenologiaEstadoId,
        fenologiaFechaEstadoAprox: fenologiaFechaEstadoAprox,
        fenologiaFechaEstadoCompleto: fenologiaFechaEstadoCompleto,
        fenologiaEstado: fenologiaEstado
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_Fenologia(req, res) {
    const id = req.params.id;
    Fenologia.findById(id).then(fenologia => {
        if (fenologia)
            return res.render('fenologia', { Fenologia: fenologia });
        return res.status(404).send({ message: 'Fenologia not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_Fenologia(req, res) {
    const id = req.params.id;
    Fenologia.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarFenologia,
    agregarFenologia,
    actualizarFenologia,
    eliminar_Fenologia,
    mostrar_por_id_Fenologia
};
