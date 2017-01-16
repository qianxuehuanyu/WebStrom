/**
 * Created by Administrator on 2016/11/14 0014.
 */
(function () {
    var indiv=document.getElementsByClassName("in");
    for(var i=0;i<indiv.length;i++){
        var inimages=indiv[i].getElementsByTagName("img");
        for(var j=0;j<inimages.length;j++){
            inimages[j].style.left="-"+(30*i)+"px";
        }
    }
    var inback=document.getElementsByClassName("inback");
    for(var i=0;i<inback.length;i++){
        var inbackimage=inback[i].getElementsByTagName("img")[0];
        inbackimage.style.left=30*(i-9)+"px"
    }
    var key=0;
    var inbutton=document.getElementById("inbutton");
    inbutton.onclick= function () {
        for(var i=0;i<indiv.length;i++){
            //console.log(indiv[i].style.transform);
                indiv[i].style.transform="rotateX("+90*key+"deg)";
        }
        key++;
    };

})();