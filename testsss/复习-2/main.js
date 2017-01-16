/**
 * Created by liuyujing on 16/10/12.
 */
(function () {

    var string = "xiaoming";
    console.log(string.charAt(0));
    console.log(string[0]);


    var regExp = /[xtv]/i;//是否包含其中的某一个字符

    // test:测试某一个字符串  是否符合 正则的规范
    //如果符合 true
    //不符合 false

    // "x"
    // "xt"
    // "xtv"
    // regExp = /[^rew]/;//是否不包含里面的某一个字符

    regExp = /[0-9]/;//查找0-9的数字
    regExp = /[a-z]/;
    regExp = /[A-Z]/;
    regExp = /[A-z]/;
    regExp = /(打架|暴力|dajia|baoli)/;
    regExp = /a.b/;
    regExp = /\w/;
    regExp = /web\b/;
    regExp = /\bweb/;
    regExp = /^ucai/;
    regExp = /ttt$/;
    regExp = /j+/;
    regExp = /w{3}/;
    regExp = /w{1,3}/;
    regExp = /iphone(?=9.0|9.1|10.0)/;
    regExp=/1([1-9]{2})\d{8}/;
    // regExp = /iphone(?!9.0|9.1|10.0)/;
    regExp = /[rt]/;
    var input = document.getElementById("name");
    var button = document.getElementById("done");
    button.onclick = function () {
        console.log(input.value);
        var result = regExp.test(input.value);
        if (result){
            alert("正确！");
            alert(regExp.exec(input.value));
            alert(input.value.search(regExp));
        }
    };
    
    /*
    * 注册界面
    * 帐号 帐号必须是字母
    * 密码 必须数字
    * */


    //查看用户 输入的是不是 手机号
    // 都是11位
    // 133
    // 130
    // 186
    // 158




    var regExpForAcc = /[a-z]/i;
    var regExpForPsw = /[0-9]/;
    var acc = document.getElementById("acc")
    var psw = document.getElementById("psw")
    var register = document.getElementById("register")

    register.onclick = function () {
        //判断用户是否输入了帐号
        if (acc.value.length==0){
            alert("未输入帐号");
            return;
        }
        //判断用户是否输入了密码
        if (psw.value.length==0){
            alert("未输入密码！");
            return;
        }

        if (regExpForAcc.test(acc.value)&&regExpForPsw.test(psw.value)){
            alert("注册成功！");
        }else {
            alert("帐号或密码不符合规则！");
        }
    }





})();