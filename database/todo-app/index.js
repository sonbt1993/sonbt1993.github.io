const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const MongoClient = require("mongodb").MongoClient

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
        return console.log(err)
    }
    console.log("Đã kết nối tới database")
})
app.use(bodyParser.urlencoded({extended:true}))
app.use('/CSS', express.static('CSS'));
//app.use(express.static('CSS'));
app.set("view engine", "ejs")
//app.use(express.static(__dirname + "/public"));


let catList = [
    {
        image: "https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg",
        name: "Mèo British Shorthair",
        link: "BritishSH.html"
    },
    {
        image: "https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg",
        name: "Mèo Scottish Fold",
        link: "ScottishFold.html"
    },
    {
        image: "https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg",
        name: "Mèo Russian Blue",
        link: "RussianBlue.html"
    },
]
app.get("/", function(req, res){
    res.send("Hello from sever")
})

app.get("/about", function(req, res){
    res.send("<h1>About function</h1>")
})

app.listen(3000, function(){
    console.log("Hello node js running on port 3000")
})

app.get("/trangchu", function(req, res){
    res.render("index.ejs", {result: catList})
})

app.post("/new-cat", function(req, res) {
    console.log("Đã nhận request", req.body)
    let newCat = req.body;
    catList.push(newCat);
})

app.post("/delete-cat", function(req, res) {
    console.log("Đã nhận request", req.body)
    for (var i = 0; i < catList.length; i++) {
        if (catList[i].name === req.body.name) {
            catList.splice(i, 1);
        }
    }
})

app.post("/fix-cat", function(req, res) {
    console.log("Đã nhận request", req.body)
    for (var i = 0; i < catList.length; i++) {
        if (catList[i].name === req.body.name) {
            catList[i].name = req.body.newName
        }
    }
})
