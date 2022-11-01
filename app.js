const express = require("express");
const app = express();
const path = require("path");

let PORT = 3000

app.listen(PORT, console.log ("listen on port" + PORT));

app.use(express.static("public"))

app.get("/", (req, res) => {
   
   console.log("Entre a la home");

res.sendFile(path. resolve("./views/home.html"));
  
})
app.get('/login', (req,res)=>{
   res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
   res.sendFile(__dirname + '/views/register.html');
});