const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

let bmi = [];

app.get("/", (req, res) => {
    res.render("calculator");
});

app.get("/result", (req, res) => {
    res.render("result", {result: bmi})
});

app.post("/", (req, res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    bmi.push(Math.round((weight / (height*height)) * 10000));
    res.redirect("result");
})

app.listen(3000, function(){
    console.log("Server has started on port 3000.");
});