var express =require ("express");
var app = express();
app.get("/",function (req,resp){
    resp.send("ok guys");
})
app.listen(3000);
console.log("server is getting started");