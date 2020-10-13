const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
// rutas de pagina principal
router.get('/', indexController.index);
// ruta de mostrar productos en tabla 
router.get('/productos', indexController.getProductos)
router.post('/new-product', indexController.addProduct);

// ruta de crear new producto

// ruta de editar producto formulario

// ruta de agregar nuevo carrito

// ruta de carrito
router.get('/carrito', indexController.getCarrito);
module.exports = router;
