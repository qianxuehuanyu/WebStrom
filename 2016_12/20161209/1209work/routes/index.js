var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    req.models.Login.find({}, function (err, result) {
        if (!err) {
            res.render("index", {users: result, title: "用户"});
        } else {
            res.json(err);
        }
    });
});

router.post("/adduser", function (req, res) {
    req.models.Login.find({user: req.body.user}, function (err,result) {
        if (err) {
           res.json({code:4,message:err});
        } else {
            console.log(result);
            if(result.length==0){
                adduser();
            }else{
                res.json({code:3,message:"该用户名已经被使用！"});
            }
        }
        function adduser(){
            req.models.Login.create({
                user: req.body.user,
                pass: req.body.pass,
                login: "loginout"
            }, function (err) {
                if (!err) {
                    res.json({code: 1, message: "Ok"});
                } else {
                    console.log(err);
                    res.json({code: 2, message: "Fail", ormError: err});
                }
            });
        }
    });
});

router.post("/login", function (req, res) {
    req.models.Login.find({user: req.body.user,pass:req.body.pass}, function (err,result) {
        if (err) {
            res.json({code:5,message:"登录失败！"});
        } else {
            console.log(result[0].id);
            if(result.length==0){
                res.json({code:4,message:"用户名未被注册！"});
            }else{
                login(result[0].id);
            }
        }
    });
    function login(uid){
        req.models.Login.get(uid, function (err, user) {
            if(user.pass==req.body.pass){
                user.login = "loginin";
                    user.save(function (err) {
                        if (!err) {
                            res.json({code: 1,message:"登录成功！"});
                        } else {
                            console.log(err);
                            res.json({code: 2,message:"网络不稳定，请重试 "});
                        }
                    });
            }else{
                res.json({code: 3,message:"密码错误！"});
            }
        });
    }
});


router.get("/delete", function (req, res) {
    req.models.Login.find({id: req.query.id}).remove(function (err) {
        if (!err) {
            res.json({code: 1, message: "Ok"});
        } else {
            console.log(err);
            res.json({code: 2, ormError: err});
        }
    });
});

router.post("/update", function (req, res) {
    req.models.Login.get(req.body.id, function (err, user) {
        if (!err) {
            user.user = req.body.user;
            user.login = req.body.login;
            user.save(function (err) {
                if (!err) {
                    res.json({code: 1});
                } else {
                    console.log(err);
                    res.json({code: 2});
                }
            });

        } else {
            console.log(err);
            res.json({code: 2});
        }
    });
});

module.exports = router;
