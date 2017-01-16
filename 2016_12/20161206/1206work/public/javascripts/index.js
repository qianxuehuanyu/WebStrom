/**
 * Created by plter on 2016/12/6.
 */

(function () {

    $("#form-add-user").submit(function (e) {
        e.preventDefault();

        $.post("/users/add", {
            user: this['user'].value,
            pass: this['pass'].value
        }).done(function (data) {
            if (data.code == 1) {
                alert("success");
                window.open("http://localhost:3000/","_self");
            }else if(data.code == 3){
                alert(data.message);
            } else {
                alert("添加用户失败");
            }
        });
    });

    $(".btn-delete").click(function (e) {
        e.preventDefault();

        $.get(this.href).done(function (data) {
            console.log(data);

            if (data.code == 1) {
                alert("success");
                window.open("http://localhost:3000/","_self");
            } else {
                alert("删除失败");
            }
        });
    });


    $("#form-login-user").submit(function (e) {
        e.preventDefault();
        $.post("/users/login", {
            user: this['user'].value,
            pass: this['pass'].value
        }).done(function (data) {
            if (data.code == 1) {
                alert("success");
                window.open("http://localhost:3000/","_self");
            } else {
                alert("登录失败"+data.message);
            }
        });
    });
})();