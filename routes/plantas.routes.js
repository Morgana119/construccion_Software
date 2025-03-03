const express = require('express');

const router = express.Router();

const plantas = [];

//router.get es para registrar un middleware para peticiones HTTP GET
router.get('/agregar', (request, response, next) => {
    //.render para usar partials (includes)
    response.render('agregar_planta');
});

//router.post es para registrar un middleware para peticiones HTTP POST
router.post('/agregar', (request, response, next) => {
  console.log(request.body);
  plantas.push(request.body.nombre);

  response.render('lista_plantas', {
    plantas: plantas,
  });
});

//mandar un html desde un archivo
const path = require('path');
router.get('/regar',(request, response, next) => {
  //response.sendFile('../views/index.html');
  response.sendFile(path.join(__dirname, '..','views','index.html')); //hace la conversión de formato, join pone los /
});

module.exports = router;