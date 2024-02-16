const express = require('express');
const productoController = require('../controller/productocontroller');

const router = express.Router();

router.post('/productos', productoController.agregarProducto);
router.get('/productos', productoController.visualizarProducto);
router.get('/productos/:id',productoController.mostrar_por_id_Producto)
router.put('/productos/:id', productoController.actualizarProducto);

module.exports = router;
