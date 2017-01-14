var express = require('express');
var router = express.Router();

const allowedHosts = ['http://localhost:63342', 'http://localhost'];
//const allowedHosts = ['http://localhost:63342'];
//const allowedHosts = ['http://localhost'];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get("/data", (req, res)=> {

    if (allowedHosts.indexOf(req.headers.origin)) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
    // res.header('Access-Control-Allow-Origin', '*');//允许所有域名访问
    res.json({name: "ucai", age: 10});
});
//router.get("/hello",(req,res)=>{
//    res.send(`Hello ${req.query.user}`);
//});
//post 数据类型
//router.post("/hello",(req,res)=>{
//    console.log(req.body);
//    res.send(`Hello ${req.body.user}`);
//});
//router.post("/hello",(req,res)=>{
//    req.on("data",data=>{
//        console.log(data.toString());
//    });
//    //结果： user=4523
//
//});
//router.post("/hello",(req,res)=>{
//    //对传输数据进行转换后
//    res.send(`Hello ${req.body.user} Hello ${req.body.password}`);
//});
router.post("/hello.json",(req,res)=>{
    //json类型数据接收发送
    var str="";
    req.on("data",data=>{
        str+=data;
    });
    req.on("end",()=>{
        //console.log(str);
        var obj=JSON.parse(str);
        var result="";
        if(obj.user=="admin"&&obj.password=="lzy"){
            result="SUCCESS! 管理员："+obj.user+"登录成功";
        }else{
            result="WRONG! 管理员："+obj.user+"登录失败";
        }
        res.send(result);
        //传出JSON格式数据，无需再加入send
        //res.json({result:`Hello ${obj.user}`});
        //
    });
});
module.exports = router;
