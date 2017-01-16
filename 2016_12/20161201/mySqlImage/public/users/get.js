/**
 * Created by Administrator on 2016/12/1 0001.
 */
(function () {


$("#form-insave").on("submit", function (e) {
    e.preventDefault();
    console.log(this["infilename"].value,this["intext"].value,this["inimage"].value);
    $.post("/users/add",{
        filename:this["infilename"].value,
        text:this["intext"].value,
        url:this["inimage"].value
    }).done(function (data) {
        console.log(data);
        alert("success");
        window.open("http://localhost:3000/users/get");
    });
});
})();