const Usuarios = require('../models/usuario');


function agregar(req, res) {
    const user = new Usuarios ({
        marca: req.body.marca,
        descripcion: req.body.descripcion,
        num_Estante: req.body.num_Estante
    })
    user.save().then(
        res.redirect('/')
    ).catch(err=>res.status(500).send({err}))
}

function visualizar(req,res) {
    Usuarios.find({}).then(Usuarios=> {
        if (Usuarios.length) return res.render('index', {Usuarios:Usuarios}) 
        return res.status('204').send({message:'NO CONTENT'});
    }).catch(err=>res.status(500).send({err})) 
}

function actualizar(req, res) {
    const id = req.body.id_editar
    const nombre = req.body.editar_nombre
    const apellido = req.body.editar_apellido
    Usuarios.findByIdAndUpdate(id, {nombre:nombre}, {apellido:apellido}).then(
        res.redirect('/')
    ).catch(err=> res.status(500).send({err}))
}

function mostrar_por_id(req, res) {
    const id = req.params.id
    Usuarios.findById(id).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

function eliminar(req, res) {
    const id = req.params.id
    Usuarios.findByIdAndDelete(id).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}
module.exports = {
    visualizar,
    agregar,
    actualizar,
    eliminar,
    mostrar_por_id
}