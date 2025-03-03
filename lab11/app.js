//Código de pair programming con Santiago Alducin

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set ("views", path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));

const plantas_routes = require("./routes/plantas2.routes");
const other_routes = require("./routes/other.routes");

app.use("/plantas", plantas_routes);
app.use("/", other_routes);

app.use((request, response, next) => {
    response.send("ERROR: 404");
});

app.listen(3000);