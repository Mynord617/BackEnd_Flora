const Categorias = require('../models/categorias');

function agregarCategoria(req, res) {
    const _categoria = new Categorias({
        categoriaId: req.body.categoriaId,
        categoriaNombre: req.body.categoriaNombre,
        categoriaEstado: req.body.categoriaEstado
    });
    _categoria.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarCategoria(req, res) {
    Categorias.find({}).then(categorias => {
        if (categorias.length)
            return res.render('index', { Categorias: categorias });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarCategoria(req, res) {
    const id = req.body.id_editar;
    const categoriaId = req.body.editar_categoriaId;
    const categoriaNombre = req.body.editar_categoriaNombre;
    const categoriaEstado = req.body.editar_categoriaEstado;
    Categorias.findByIdAndUpdate(id, {
        categoriaId: categoriaId,
        categoriaNombre: categoriaNombre,
        categoriaEstado: categoriaEstado
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_Categoria(req, res) {
    const id = req.params.id;
    Categorias.findById(id).then(categoria => {
        if (categoria)
            return res.render('categoria', { Categoria: categoria });
        return res.status(404).send({ message: 'Categoria not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_Categoria(req, res) {
    const id = req.params.id;
    Categorias.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarCategoria,
    agregarCategoria,
    actualizarCategoria,
    eliminar_Categoria,
    mostrar_por_id_Categoria
};
