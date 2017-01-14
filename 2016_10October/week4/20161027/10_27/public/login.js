/**
 * Created by plter on 10/24/16.
 */

(function () {
    var resultDIV=document.querySelector("#login-result");
    var login_form=document.getElementById("login-form");
    var out_alter=document.getElementById("popupBasic1");

    login_form.addEventListener("submit", function (e) {
        e.preventDefault();
        var xhr=new XMLHttpRequest();
        out_alter.style.display="block";
        resultDIV.innerHTML="正在连接服务器...";
        xhr.open("POST","/login");
        xhr.send(JSON.stringify({user: this['user'].value, password: this['password'].value}));
        var result_json;
        xhr.addEventListener("readystatechange", function (e) {
            console.log(xhr.readyState);
            if(xhr.readyState==4){
                console.log(xhr.responseText);
                console.log(JSON.parse(xhr.responseText));
                result_json=JSON.parse(xhr.responseText);
            }});

        xhr.addEventListener("load", function () {
        switch (result_json.value) {
            case 1:
                resultDIV.innerHTML="登陆成功<br/>"+result_json.result;
                break;
            case 2:
                resultDIV.innerHTML=result_json.result;
                break;
            case 3:
                resultDIV.innerHTML=result_json.result;
                break;
            case 5:
                resultDIV.innerHTML=result_json.result;
                break;
            case 6:
                resultDIV.innerHTML="帐号或者密码错误<br/>"+result_json.result;
                break;
            default:
                resultDIV.innerHTML="未知错误";
                break;
        }
        });
    });
})();