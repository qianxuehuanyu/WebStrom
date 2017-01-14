/**
 * Created by Administrator on 2016/10/19 0019.
 */
(function () {
    var one=$(".one")[0];
    var two=$(".two")[0];
    console.log(two);
    var onex;
    var oney;
    var twox;
    var twoy;
    var background=  $(".backg")[0];
    background.addEventListener("click", function (e) {
        $(".m_t").css("opacity","0");
        $(".m_o").css("opacity","0");
    });
    one.addEventListener("contextmenu", function (e) {
        $(".m_o").css("opacity","1");
        $(".m_t").css("opacity","0");
        //onex= e.offsetX==undefined? e.layerX: e.offsetX;
        //oney= e.offsetY==undefined? e.layerY: e.offsetY;
        onex= e.layerX;
        oney= e.layerY;
        $(".m_o").css("left",onex).css("top",oney);
        e.preventDefault();
    });

    two.addEventListener("contextmenu", function (e) {
        $(".m_t").css("opacity","1");
        $(".m_o").css("opacity","0");
        //twox= e.offsetX==undefined? e.layerX: e.offsetX;
        //twoy= e.offsetY==undefined? e.layerY: e.offsetY;
        //twox= e.offsetX;
        //twoy= e.offsetY;
        twox= e.layerX;
        twoy= e.layerY;
        $(".m_t").css("left",twox).css("top",twoy);
        e.preventDefault();
    });

    $(".m_t").find("a").click(function () {
        $(".m_t").css("opacity","0");
    });

    $(".m_o").find("a").click(function () {
        $(".m_o").css("opacity","0");
    });
})();