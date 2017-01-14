(function(){
$(document).ready(function(){

    $("#form_sign_in").submit(function(e){
        e.preventDefault();
            $.ajax({
                url:"signin",
                type:"POST",
                data:{
                    user_name:$("#user_name").val(),
                    user_password:$("#user_password").val()
                },
                success:function(data){
                    $("#sign_in_result").html(data);
                    setTimeout(function () {
                        window.open("http://localhost:3000/","_top");
                    },2000)
                }
            });
    });


    $("#form_sign_up").submit(function(e){
            e.preventDefault();
            if($("#sign_up_password").val()==$("#sign_up_password_again").val()){
                $.ajax({
                    url:"signup",
                    type:"POST",
                    data:{
                        sign_up_name:$("#sign_up_name").val(),
                        sign_up_password:$("#sign_up_password").val()
                    },
                    success:function(data){
                        $("#sign_up_result").html(data);
                        setTimeout(function () {
                            window.open("http://localhost:3000/","_top");
                        },2000)
                    }
                });
            }else{
                $("#sign_up_result").html("两次输入的密码不一致，请确保正确输入密码");
                return;
            }
    });



})
})();