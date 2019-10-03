var express = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(3000);

app.get("/", function(req,res)
{
    //res.send("<font color=red >beoxinhdep</font>")
    res.sendFile(__dirname + "/index.html")
})
app.get("/gioithieu.apx", function(req,res)
{
    //res.send("<font color=red >beoxinhdep</font>")
    //res.sendFile(__dirname + "/index.html")
    res.send("im beoxinhdep");
})
app.get("/tinhtong/:so1/:so2", function(req,res)
{
    var n = req.params.so1;
    n = parseInt(n);
    var m = req.params.so2;
    m = parseInt(m);
    
    var tong = n+m;
    res.send("<font color=green>"+tong+"</font>")
    //res.sendFile(__dirname + "/index.html")
})