/**
 * Created by plter on 2016/12/9.
 */

(function () {

    $("#form-add-user").submit(function (e) {
        e.preventDefault();

        $.post("/adduser", {
            user: this['user'].value,
            pass: this['pass'].value
        }).done(function (data) {
            console.log(data);
            if (data.code == 1) {
                alert("注册成功");
                location.reload();
            } else if(data.code==3){
                alert("该用户名已被使用！");
            }else if(data.code==2){
                alert("网络不稳定请重试！");
            }else{
                alert("添加用户失败");
            }
        }).fail(function (err) {
            alert("无法连接服务器");
        });
    });

    $("#form-login-user").submit(function (e) {
        e.preventDefault();

        $.post("/login", {
            user: this['username'].value,
            pass: this['password'].value
        }).done(function (data) {
            console.log(data);
            if (data.code == 1) {
                alert(data.message);
                location.reload();
            } else{
                alert(data.message);
            }

        }).fail(function (err) {
            alert("无法连接服务器");
        });
    });





    $(".btn-delete").click(function (e) {
        e.preventDefault();

        $.get(this.href).done(function (data) {
            console.log(data);

            if (data.code == 1) {
                location.reload();
            } else {
                alert("删除失败");
            }
        });
    });

    $(".form-user").submit(function (e) {
        e.preventDefault();

        $.post("/update", {
            id: this['id'].value,
            user: this['user'].value,
            login: this['login'].value
        }).done(function (data) {
            console.log(data);

            if (data.code == 1) {
                alert("保存成功");
            } else {
                alert("保存失败");
            }
        });
    });

})();