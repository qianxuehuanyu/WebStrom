/**
 * Created by plter on 10/18/16.
 */


(function () {

    var onclick = $(".onclick");
    var intime=0;
    onclick.click(function () {
        intime=(intime+1)%2;
        console.log("1111");
        if(intime==1){
            $(".rect").animate({width:"0px",left:"50px"},600,function(){
                $(".bect").animate({width:"100px",left:"0px"},600);
            });
        }else{
            $(".bect").animate({width:"0px",left:"50px"},600,function(){
                $(".rect").animate({width:"100px",left:"0px"},600);
            });
        }



    });

    $("#btn-show-rect").click(function () {
        //$(this).fadeOut(500);
        rect.fadeIn(500);
    });

})();