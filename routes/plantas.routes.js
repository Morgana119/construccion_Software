const express = require('express');

const router = express.Router();
const plantas_controller = require ('../controllers/plantas.controller');

//router.get es para registrar un middleware para peticiones HTTP GET
router.get('/agregar', plantas_controller.get_agregar);
//adaptar para diversos idiomas
router.get('/add', plantas_controller.get_agregar);

//router.post es para registrar un middleware para peticiones HTTP POST
router.post('/agregar', plantas_controller.post_agregar);

//mandar un html desde un archivo

router.get('/regar', plantas_controller.get_regar);

router.get('/:id', plantas_controller.get_root);

router.get('/', plantas_controller.get_root);

module.exports = router;