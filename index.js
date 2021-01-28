const express= require("express");
var app = express()

app.set('view engine','ejs');
app.use(express.static("public"));



app.get("/", function (req,res){
  res.render('mypage');
} );

app.get("/badass", function (req,res){
  res.render("badass");
} );

app.get("/culture", function (req,res){
  res.render("culture");
} );

app.get("/projects", function (req,res){
  res.render("projects");
} );

app.listen(3000, function(){
  console.log("server started on port 3000");
});
