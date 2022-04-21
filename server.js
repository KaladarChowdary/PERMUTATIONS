const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

var original = "";
var permutation = "";
var all = [];


function remove(str, i){
  return str.substring(0, i) + str.substring(i+1, str.length);
}

function permute(original, permutation){
  if(original === ""){
    all.push(permutation);
  }else{
    var l = original.length;
    for(let i = 0; i<l; i++){
      var permutation2 = permutation + original.charAt(i);
      var original2 = remove(original, i);
      permute(original2,permutation2);
    }
  }
}


app.listen(3000, function(){
  console.log("\nServer is active");
})

app.get("/", function(req, res){
  res.sendFile(__dirname+"//index.html");
})

app.post("/", function(req, res){
  original = String(req.body.str1);
  permute(original, permutation);
  res.send(all.join("  "));
})
