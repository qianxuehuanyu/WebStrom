var express = require('express');
var router = express.Router();

var users = new Map();
users.set("username", {username: "username", password: "12345678", email:"12345678@qq.com", phone: "15712345678"});
users.set("username1", {username: "username", password: "12345678", email:"12345678@qq.com", phone: "15712345678"});
users.set("username3", {username: "username", password: "12345678", email:"12345678@qq.com", phone: "15712345678"});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function (req, res, next) {
  var userproving=0,userselect=true;
  //console.log("login------------------",users.values());
  var inusers=users.values();
  //console.log(inusers.next());
  while (userselect){
    var innext=inusers.next();
    userselect=!innext.done;
    if(req.body.email!=""&&innext.value.email==req.body.email){
      userselect=false;
      userproving=1;
    }
    if(req.body.phone!=""&&innext.value.phone==req.body.phone){
      userselect=false;
      userproving=2;
    }
  }
  if(users.get(req.body.username)){
    userproving=3;
  }
  if(req.body.validateCode !="8"){
    userproving=4;
  }
  //-----------------------------
  if (userproving==1) {
    res.jsonp({status: 1, message: "该邮箱已经被注册！"});
    return;
  }
  if (userproving==2) {
    res.jsonp({status: 2, message: "该电话已经被注册！"});
    return;
  }
  if (userproving==3) {
    res.jsonp({status: 3, message: "该用户名已经被使用！"});
    return;
  }
  if (userproving==4) {
    res.jsonp({status: 4, message: "验证码错误"});
    return;
  }
  users.set(req.body.username, {username: req.body.username, password: req.body.password, email:req.body.email, phone: req.body.phone});
  res.jsonp({status: 0, message: "注册成功！"});
});

//=================================================================
//=================================================================
//=================================================================
router.post('/login', function (req, res, next) {
  var userproving,userselect=true;
    //console.log("login------------------",users.values());
  var inusers=users.values();
  //console.log(inusers.next());遍历查找
  while (userselect){
    var innext=inusers.next();
    userselect=!innext.done;
    if(req.body.email!=""&&innext.value.email==req.body.email){
      userselect=false;
      userproving=innext;
    }
    if(req.body.phone!=""&&innext.value.phone==req.body.phone){
      userselect=false;
      userproving=innext;
    }
  }
    if(users.get(req.body.username)){
      userproving=users.get(req.body.username);
    }

  if (userproving==null) {
    //console.log("111111");
    res.jsonp({status: 1, message: "该用户名不存在！",map:users});
    return;
  }
  if (userproving.password!=req.body.password) {
    res.jsonp({status: 2, message: "密码错误！"});
    return;
  }
  res.jsonp({status: 0, message: "登录成功！", username: userproving.username});
});


module.exports = router;
