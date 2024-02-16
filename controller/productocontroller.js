const Productos = require('../models/productoModels');

function agregarProducto(req, res) {
    const _producto = new Productos({
        productoId: req.body.productoId,
        productoNombre: req.body.productoNombre,
        productoPrecio: req.body.productoPrecio,
        productoCantidad: req.body.productoCantidad,
        productoCategoriaId: req.body.productoCategoriaId,
        productoEstado: req.body.productoEstado
    });
    _producto.save().then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function visualizarProducto(req, res) {
    Productos.find({}).then(productos => {
        if (productos.length)
            return res.render('index', { Productos: Productos });
        return res.status(204).send({ message: 'NO CONTENT' });
    }).catch(err => res.status(500).send({ err }));
}

function actualizarProducto(req, res) {
    const productoId = req.body.editar_productoId;
    const productoNombre = req.body.editar_productoNombre;
    const productoPrecio = req.body.editar_productoPrecio;
    const productoCantidad = req.body.editar_productoCantidad;
    const productoCategoriaId = req.body.editar_productoCategoriaId;
    const productoEstado = req.body.editar_productoEstado;
    Productos.findByIdAndUpdate(productoId, {
        productoId: productoId,
        productoNombre: productoNombre,
        productoPrecio: productoPrecio,
        productoCantidad: productoCantidad,
        productoCategoriaId: productoCategoriaId,
        productoEstado: productoEstado
    }).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

function mostrar_por_id_Producto(req, res) {
    const id = req.params.id;
    Productos.findById(id).then(producto => {
        if (producto)
            return res.render('producto', { Producto: producto });
        return res.status(404).send({ message: 'Producto not found' });
    }).catch(err => res.status(500).send({ err }));
}

function eliminar_Producto(req, res) {
    const id = req.params.id;
    Productos.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizarProducto,
    agregarProducto,
    actualizarProducto,
    eliminar_Producto,
    mostrar_por_id_Producto
};
