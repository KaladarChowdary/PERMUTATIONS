const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.listen(3000, function(){
  console.log("\nServer is active");
})

app.get("/", function(req, res){
  res.sendFile(__dirname+"//index.html");
})

app.post("/", function(req, res){
  var str = String(req.body.str1) + " ";
  str = str.repeat(100000);
  res.send(str);
})
