/**
 * Created by plter on 10/27/16.
 */

(function () {
   // var xhr=new XMLHttpRequest();
   // xhr.addEventListener("readystatechange", function (e) {
   //console.log(xhr.readyState);
   //  if(xhr.readyState==4){
   //      console.log(xhr.responseText);
   //      console.log(JSON.parse(xhr.responseText));
   //  }
   //     xhr.addEventListener("load", function (e) {
   //         console.log(e,xhr);
   //     });
   //
   // });
   // xhr.open("GET","/data");
   // xhr.send();
    var resultDIV=document.querySelector("#result");

    var form=document.getElementById("form");
console.log(form);

    form.addEventListener("submit",function(e){
        e.preventDefault();
        var xhr=new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            resultDIV.innerHTML=xhr.responseText;
        });
        //xhr.open("GET","/hello?user="+this['user'].value);
        //xhr.send();

        //给数据在传输前加入格式
    //    xhr.open("POST","/hello");
    //    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //    xhr.send("user="+this['user'].value);


        //用json格式发送,字符串
            xhr.open("POST","/hello.json");
        //    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send(JSON.stringify({user: this['user'].value, password: this['password'].value}));
    });


})();