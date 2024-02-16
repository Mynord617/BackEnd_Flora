const Publicacion = require('../models/publicacion');

function agregarPublicacion(req, res) {
    const _publicacion = new Publicacion({
        publicacionId: req.body.publicacionId,
        publicacionSujeto: req.body.publicacionSujeto,
        publicacionImagen: req.body.publicacionImagen,
        publicacionTexto: req.body.publicacionTexto,
        publicacionFechaHora: req.body.publicacionFechaHora,
        publicacionUsuarioId: req.body.publicacionUsuarioId,
        publicacionEstado: req.body.publicacionEstado,
        publicacionTemaId: req.body.publicacionTemaId
    });
    _publicacion.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarPublicacion(req, res) {
    Publicacion.find({}).then(publicaciones => {
        if (publicaciones.length)
            return res.render('index', { Publicaciones: publicaciones });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarPublicacion(req, res) {
    const id = req.body.id_editar;
    const publicacionId = req.body.editar_publicacionId;
    const publicacionSujeto = req.body.editar_publicacionSujeto;
    const publicacionImagen = req.body.editar_publicacionImagen;
    const publicacionTexto = req.body.editar_publicacionTexto;
    const publicacionFechaHora = req.body.editar_publicacionFechaHora;
    const publicacionUsuarioId = req.body.editar_publicacionUsuarioId;
    const publicacionEstado = req.body.editar_publicacionEstado;
    const publicacionTemaId = req.body.editar_publicacionTemaId;
    Publicacion.findByIdAndUpdate(id, {
        publicacionId: publicacionId,
        publicacionSujeto: publicacionSujeto,
        publicacionImagen: publicacionImagen,
        publicacionTexto: publicacionTexto,
        publicacionFechaHora: publicacionFechaHora,
        publicacionUsuarioId: publicacionUsuarioId,
        publicacionEstado: publicacionEstado,
        publicacionTemaId: publicacionTemaId
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_Publicacion(req, res) {
    const id = req.params.id;
    Publicacion.findById(id).then(publicacion => {
        if (publicacion)
            return res.render('publicacion', { Publicacion: publicacion });
        return res.status(404).send({ message: 'Publicacion not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_Publicacion(req, res) {
    const id = req.params.id;
    Publicacion.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarPublicacion,
    agregarPublicacion,
    actualizarPublicacion,
    eliminar_Publicacion,
    mostrar_por_id_Publicacion
};
