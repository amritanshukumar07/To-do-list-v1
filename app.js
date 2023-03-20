const express = require("express");
const bodyParser= require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/",function(req,res){

    var today= new Date();
    var currentDay= today.getDay();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("hi-IN",options);

    res.render("list",{kindOfDay: day});
    
});


app.listen(3000,function(){
console.log("server running on port 3000");
});