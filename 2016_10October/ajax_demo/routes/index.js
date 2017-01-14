var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
var users = [{existed_name:"admin",existed_password:"admin"}];

router.post("/signin",function(req,res){

    function search(){
        for(var i=0;i<users.length;i++){
            if(users[i].existed_name==req.body.user_name && users[i].existed_password==req.body.user_password){
                return true;
            }
        }
        return false;
    }
    if(search()){
        res.send("您好," + req.body.user_name + ",登陆成功");
    }else{
        res.send("用户名或密码错误");
    }
});



router.post("/signup",function(req,res){

    function search_same_name (){
        for (var j=0; j<users.length; j++){
            if(users[j].existed_name==req.body.sign_up_name){
                return true;
            }
        }
        return false;
    };

    if(search_same_name ()){
        res.send("用户名已被占用");
    }else{
        var item = {existed_name:req.body.sign_up_name,existed_password:req.body.sign_up_password};
        users.push(item);
        res.send("恭喜你，" +req.body.sign_up_name+ "，注册成功" );
    }

});

module.exports = router;
