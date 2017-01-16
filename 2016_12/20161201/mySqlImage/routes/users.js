var express = require('express');
var router = express.Router();
var multer = require("multer");
var upload = multer({dest: "public/users/uploads"});

const mysql=require("mysql");

const conn=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"mydb"
});

conn.connect(function (err) {
  if(err){
    console.log(err);console.log("无法连接数据库！")
  }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//router.post("/upload", upload.single("inimage"), function (req, res) {
//  console.log(req.file);
//  req.file.url = "uploads/" + req.file.filename;
//  res.render("users/get", {file: req.file});
//});

router.post("/get", upload.single("inimage"), function (req, res) {
  console.log(req.file);
  req.file.url = "uploads/" + req.file.filename;
  conn.connect(function (err) {
    conn.query("SELECT * FROM users", function (err,result) {
      if(!err){
        res.render("users/get",{users:result,file: req.file});
      }else{
        result.json(err);
      }
    });
  });
  //res.render("users/get", {file: req.file});
});

router.get("/get", function (req,res) {
  //req.file.url = "uploads/" + req.file.filename;
  conn.connect(function (err) {
      conn.query("SELECT * FROM users", function (err,result) {
        if(!err){
          var file={kind :"no"};
          res.render("users/get",{users:result,file});
        }else{
          result.json(err);
        }
      });
  });
});
router.post("/add", function (req, res) {
  conn.query(`INSERT INTO users SET ?`, req.body, function (err) {
    if (!err) {
      res.json({code: 1, message: "OK"});
    } else {
      res.json({code: 2, message: "Can not add user", mysqlError: err});
    }
  });
});



module.exports = router;
