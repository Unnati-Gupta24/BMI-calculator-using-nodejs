const express = require("express");
const body = require("body-parser");

const app = express();
app.use(body.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/bmi.html");
});

app.post("/",(req,res)=>{
    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);
    var resu = w/(h*h);
    res.send("your bmi is:"+resu);
});

app.listen(7002);