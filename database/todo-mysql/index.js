var express = require('express');
var app = express();
const bodyParser = require("body-parser")//doc du lieu tu man hinhs
app.set("view engine", "ejs")

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "dulieu"
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!")
});  

app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});

app.get("/home", function(req, res){
   con.query("SELECT * FROM catlist", function (err, result) {//Phần này chắc cần chú ý đến cái "tên_database.tên_table" để truy cập vào database
        if (err) throw err;
        // console.log(result);//cai nay se log ra console tren powershell
        res.render("index.ejs", {result: result})//render ra file index.ejs + luu ket qua result vao ket qua duoi dang object
    }); 
    //res.render("index.ejs", {result: catList})
})

 app.post("/new-cat", function(req, res){
  console.log("Đã nhận req add post", req.body)
  var sql = `INSERT INTO catlist (img, name) VALUES ('${req.body.image}' , '${req.body.name}')`;
  con.query(sql,function (err, result) { 
    if (err) throw err;  
    })
  })