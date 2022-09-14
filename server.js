const express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send(`
    <h1>Hello world!</h1>
    <p>This is my servers homepage. I hope you like it :D</p>
    `);
})

app.get("/contact", function(req, res){
  res.send("Contact me at: hadija.ahmatovic@gmail.com");
})

app.get("/about", function(req, res){
  res.send(`
    <h1>About me:</h1>
    <p>Hadija Ahmatović</p>
    <p>CS student</p>
    <p>I like coding!</p>
    `)
})

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
