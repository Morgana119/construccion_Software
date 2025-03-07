//Código de pair programming con Santiago Alducin
const express = require("express");
const router = express.Router();
const fs = require("fs");

// app.get es para registrar un middleware para peticiones http:GET
router.get("/agregar", (request, response, next) => {
  response.render('agregar_planta');
});

router.post('/agregar', (request, response, next) => {
  const plantas = [];

  console.log(request.body);
  fs.appendFileSync("plantasLab12.txt", request.body.planta + "\n");
  const plantasRead = fs.readFileSync("plantasLab12.txt", {
    encoding: "utf8", flag: 'r'});
  const plantasSplit = plantasRead.split("\n");

  for(let i = 1; i<plantasSplit.length - 1 ; i++){
    plantas.push(plantasSplit[i]);
  }

  response.render('lista_planta', {
    plantas: plantas,
  });
});

module.exports = router;