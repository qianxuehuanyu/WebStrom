var express = require('express');
var router = express.Router();
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

MongoClient.connect1 = function () {
    return this.connect("mongodb://localhost/server");
};


/* GET home page. */
router.get('/', function (req, res, next) {
var data;
    MongoClient.connect1().then(db => {
        return db.collection("users").find().toArray();
    }).then(result => {
        data=result;
        res.render("index", {title: "连接Mongo", users: result});
    }).then(db => {
        //console.log(data,data.length);
    }).catch(err => {
        console.log(err);
        res.send("Can not connect database");
    });
});

router.post("/users/add", function (req, res) {
    var numbody;var inright;
    MongoClient.connect1().then(db => {
        return db.collection("users").find().toArray();
    }).then(result=>{
        numbody=result.length;
    });
    MongoClient.connect1().then(db => {
        return db.collection("users").find({user:req.body.user}).toArray();
    }).then(result=>{
        inright=result.length;
        console.log(inright,numbody,result);
    }).then(retefads);

function retefads(){
    MongoClient.connect1().then(db => {
        if(inright!=0){
            return "alreadyused"
        }else{
            return db.collection("users").insertOne({id:numbody,user:req.body.user, pass: req.body.pass});
        }
    }).then(result=>{
        if(result=="alreadyused"){
            res.json({code: 3, message: "该用户名已经被使用！"});
        }else{
            res.json({code: 1, message: "Ok"});
        }
    }).catch(err => {
        console.log(err);
        res.json({code: 2, message: "Error"});
    });
}
});
//update
router.post("/users/login", function (req, res) {
    var outnum;
    MongoClient.connect1().then(db => {
        return db.collection("users").find({user: req.body.user}).toArray();
    }).then(result=>{
        outnum=result.length;
        //console.log(result,result[0].pass,req.body.pass);
        if(outnum==1){
            if(result[0].pass==req.body.pass){
                req.body.id=result[0].id;
                updatalogin();
            }else{
                return "worrypass";
            }
        }else{
            return "nousername";
        }
    }).then(result=>{
        if(result=="nousername"){
            res.json({code: 0, message: "用户名不存在"});
        }else if(result=="worrypass"){
            res.json({code: 3, message: "密码错误"});
        }else {
            res.json({code: 1, message: "Ok"});
        }
    }).catch(err => {
        console.log(err);
        res.json({code: 2, message: "Error"});
    });
    function updatalogin(){
        "use strict";
        MongoClient.connect1().then(db => {
            return db.collection("users").update({user: req.body.user},{id:req.body.id,user:req.body.user, pass: req.body.pass,login:"inlogin"}).toArray();
        }).then(result=>{
            return result.length;
        });
    }
});

router.get("/users/delete", function (req, res) {
    var data;
    MongoClient.connect1().then(db => {
        return db.collection("users").deleteOne({_id: mongo.ObjectId(req.query._id)});
    }).then(function (result) {
        data=result;
        res.json({code: 1, message: "Ok"});
    }).catch(err => {
        console.log(err);
        res.json({code: 2, message: "Error"});
    });
});

module.exports = router;
