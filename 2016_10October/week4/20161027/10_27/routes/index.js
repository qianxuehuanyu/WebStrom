var express = require('express');
var router = express.Router();
const allowedHosts = ['http://localhost:63342', 'http://localhost'];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var users = new Map();
users.set("admin",{user:"admin",password: "lzy"});
router.get("/data", (req, res)=> {
  //
  //if (allowedHosts.indexOf(req.headers.origin)) {
  //  res.header('Access-Control-Allow-Origin', req.headers.origin);
  //}
   res.header('Access-Control-Allow-Origin', '*');//允许所有域名访问
  //res.json({name: "ucai", age: 10});
});
//
router.post('/register', (req, res, next)=> {
  var str="";
  req.on("data",data=>{
    str+=data;
  });
            console.log("UPUPUP");
  req.on("end",()=>{
            console.log(str);
    var obj=JSON.parse(str);
    if (!obj.user) {
      res.json({value: 2, result: "No user name"});
      console.log("2");
      return;
    }
    if (!obj.password) {
      res.json({value: 3, result: "No password"});
      console.log("3");
      return;
    }
    if (users.has(obj.user)) {
      res.json({value: 4, result: "User name already in use"});
      console.log("4");
      return;
    }
    //相当于把user当主键用
    users.set(obj.user, {user: obj.user, password: obj.password});
    res.json({value: 1, result: "SUCCESS"});
    console.log("1");
  });
});
//
router.post("/login", (req, res)=>{
  var str="";
  req.on("data",data=>{
    str+=data;
  });
  //console.log("UPUPUP");
  req.on("end",()=>{
    var obj=JSON.parse(str);
    if (!obj.user) {
      res.json({value: 2, result: "No user name"});
      console.log("2");
      return;
    }
    if (!obj.password) {
      res.json({value: 3, result: "No password"});
      console.log("3");
      return;
    }
    if (!users.has(obj.user)) {
      res.json({value: 5, result: "User name not exists"});
      console.log("5");
      return;
    }
    var user = users.get(obj.user);
    if (user.password != obj.password) {
      res.json({value: 6, result: "Password error"});
      console.log("1");
      return;
    }
    res.json({value: 1, result: "SUCCESS"});
    console.log("1");

  });
});

module.exports = router;

