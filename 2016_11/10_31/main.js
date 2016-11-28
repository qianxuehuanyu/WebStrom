/**
 * Created by Administrator on 2016/10/31 0031.
 */
(function () {
    var red=document.getElementById("red");
    var green=document.getElementById("green");
    var blue=document.getElementById("blue");
    var numred=document.getElementById("numred");
    var numgreen=document.getElementById("numgreen");
    var numblue=document.getElementById("numblue");
    var footer=document.getElementById("infooter");
    var inred=129,ingreen=129,inblue=129;
    red.addEventListener("change", function () {
        numred.value=red.value;
        inred=red.value;
        footer.style.backgroundColor="rgba("+inred+","+ingreen+","+inblue+",0.5)";
    });
    green.addEventListener("change", function () {
        numgreen.value=green.value;
        ingreen=green.value;
        footer.style.backgroundColor="rgba("+inred+","+ingreen+","+inblue+",0.5)";
    });
    blue.addEventListener("change", function () {
        numblue.value=blue.value;
        inblue=blue.value;
        footer.style.backgroundColor="rgba("+inred+","+ingreen+","+inblue+",0.5)";
    });
    function changecolor(){
        "use strict";
        inred=numred.value;
        ingreen=numgreen.value;
        inblue=numblue.value;
        footer.style.backgroundColor="rgba("+inred+","+ingreen+","+inblue+",0.5)";
    }
    window.changecolor=changecolor;

})();