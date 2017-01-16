/**
 * Created by Administrator on 2016/11/24 0024.
 */
(function () {
    var findlink=$("#findlink");
    findlink.focus(function () {
        $("#find").css("backgroundColor","white");
        $("#find").css("color","#333");
    });
    findlink.blur(function () {
        $("#find").css("backgroundColor","#333");
        $("#find").css("color","#ccc");
    });
    window.onload= function () {
        //cookie
        //***********
        var first=$.cookie("fisrt");
        if(first){
            $("#container").remove();
        }else{
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: 5000,//可选选项，自动滑动
            })
        }
    };

    function swiperclose(){
        "use strict";
    //    cookie
        $("#container").remove();
        $.cookie("fisrt","firstend",{expires:1});
    }
    window.swiperclose=swiperclose;
})();














