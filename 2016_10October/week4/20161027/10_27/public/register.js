/**
 * Created by plter on 10/24/16.
 */

(function () {
    //register-submit        popupBasic2
    var resultDIV=document.querySelector("#register-result");
    var register_form=document.getElementById("register-form");
    var out_alter=document.getElementById("popupBasic2");

    register_form.addEventListener("submit", function (e) {
        e.preventDefault();
        var pass = this['password'].value;
        var passConfirm = this['password-confirm'].value;
        if (pass != passConfirm) {
            resultDIV.innerHTML="确认密码不一致";
            return;
        }
        var user = this['user'].value;
        out_alter.style.display="block";

        resultDIV.innerHTML="正在连接服务器...";
        var xhr=new XMLHttpRequest();
        xhr.open("POST","/register");
        //console.log(pass,passConfirm,user);
        xhr.send(JSON.stringify({user: user, password: passConfirm}));
        //console.log(xhr);
        var result_json;
        xhr.addEventListener("readystatechange", function (e) {
            //console.log(xhr.readyState);
              if(xhr.readyState==4){
                  //console.log(xhr.responseText);
                  //console.log(JSON.parse(xhr.responseText));
                  result_json=JSON.parse(xhr.responseText);
              }});

        xhr.addEventListener("load", function () {
            switch (result_json.value) {
                case 1:
                    resultDIV.innerHTML="注册成功<br/>"+result_json.result;
                    break;
                case 2:
                    resultDIV.innerHTML=result_json.result;
                    break;
                case 3:
                    resultDIV.innerHTML=result_json.result;
                    break;
                case 4:
                    resultDIV.innerHTML="该用户名已经被占用!<br/>"+result_json.result;
                    break;
                default:
                    resultDIV.innerHTML="未知错误";
                    break;
            }
        });
    });

})();