//Código de pair programming con Santiago Alducin

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const plantas_routes = require("./routes/plantas2.routes");
const other_routes = require("./routes/other.routes");

app.use("/plantas", plantas_routes);
app.use("/", other_routes);

app.use((req, res, next) => {
    res.send("ERROR: 404");
});

app.listen(3000);