//Código de pair programming con Santiago Alducin

const express = require("express");
const router = express.Router();
const fs = require("fs");

const html_header = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Las mejores plantas</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
    >
  </head>
`;

const html_home =
    html_header +
    `
    <body>
    <section class="section">
        <form action="/plantas/agregar" method="POST">
        <label for="planta" class="label">Nombre de la planta</label>
        <input 
            class="input" 
            type="text" 
            placeholder="Orquidea" 
            id="planta"
            name="planta"
        />
        <input type="submit" value="Enviar" action="/otracosa" class="button is-info mt-2"/>
        </form>
        
    </section>
    
    `;

const html_footer = `</body>
</html>`;

const html_error404 =
    html_header +
    `<body>
    <section class="section">
      <h1 class="is-danger">Error 404:</h1>
      <h1>La página que estás buscando no existe</h1>
    </section>
  </body>
</html>
`;
// app.get es para registrar un middleware para peticiones http:GET
router.get("/agregar", (req, res, next) => {
    res.send(html_header + html_home + html_footer);
});

const plantas = [];

router.post("/agregar", (req, res, next) => {
    console.log(req.body.planta);
    plantas.push(req.body.planta);
    fs.appendFileSync("plantas.txt", req.body.planta);
    let html = html_header;
    html += "<div class='section'>";
    for (let p of plantas) {
        html += `
        <div class="card">  <div class="card-content">
            <div class="media-content">
                <p class="title is-4">${p}</p>
            </div>
            </div>
            </div>`;
    }
    html += "</div>";
    html += html_footer;
    res.send(html);
    console.log(plantas);
});

module.exports = router;