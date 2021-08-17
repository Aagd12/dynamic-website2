const express = require("express");
const path = require("path");
require("./db/conn");
const hbs=require("hbs");
const app = express();

const port = process.env.PORT || 3000
// setting the path
const static_path = path.join(__dirname, "../public");
const templates_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
// console.log(path.join(__dirname,"../public"));
// middlewere
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/jq")))

app.use(express.static(static_path))
app.set("view engine","hbs");
app.set("views",templates_path);
hbs.registerPartials(partials_path)
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.listen(port, () => {
    console.log(`server is running on port ${port} `);
});