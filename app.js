const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = Math.round((weight / (height*height)) * 10000);
    res.send("<h1>Your BMI is: " + result);
})

app.listen(3000, function(){
    console.log("Server has started on port 3000.");
});