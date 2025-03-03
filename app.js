const express = require('express');
//crea servidor
const app = express();

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views'); //directo va a la carpeta views pq ahí están las vistas

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware -> capa 
app.use((request, response, next) => {
    console.log('Middleware!');
    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

const plantasRoutes = require('./routes/plantas.routes');
//para todas las rutas que contengas inicialmente /plantas
app.use('/plantas', plantasRoutes);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    //Manda la respuesta
    response.statusCode = 404;
    response.status(404).send('No se encuentra el recurso'); 
});

//puerto
app.listen(3000);