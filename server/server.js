var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"../app")));
app.listen(8085,function(){
    console.log("Started listening on port", 8085);
})
