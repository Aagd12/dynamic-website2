const express = require("express");
const path = require("path");
let s = require("./src/db/conn");
const hbs = require("hbs");
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000
    // setting the path
const static_path = path.join(__dirname, "./public");
const templates_path = path.join(__dirname, "./templates/views");
const partials_path = path.join(__dirname, "./templates/partials");
// console.log(path.join(__dirname,"../public"));
// middlewere
app.use('/css', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/jq")))
const kittySchema = new mongoose.Schema({
    fname: String,
    name: String,
    age: Number,
    gender: String,
    email: String,
    phone: Number,
    password: Number
});


const contactus = mongoose.model('contactus', kittySchema);

app.use(express.static(static_path))
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path)
app.get("/", (req, res) => {
    res.render("index.hbs");
});
app.get("/contact", (req, res) => {
    res.render("contact.hbs");
});
app.get("/about", (req, res) => {
    res.render("about.hbs");
});
app.post('/contact', (req, res) => {
    var myData = new contactus(req.body);
    myData.save().then(() => {
            res.render('index.hbs');
        }).catch(() => {
            res.status(400).send('item was not saved to the databse')
        })
        // res.status(200).render('contact.pug');
});
app.listen(port, () => {
    console.log(`server is running on port ${port} `);
});