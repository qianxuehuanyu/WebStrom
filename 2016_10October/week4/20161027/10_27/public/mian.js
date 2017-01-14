/**
 * Created by Administrator on 2016/10/28 0028.
 */

(function () {
    var input_text=document.getElementsByTagName("input");
    function moveout(mum){
        "use strict";
        if(mum==1){
            var out_alter1=document.getElementById("popupBasic1");
            out_alter1.style.display="none";

        }else if(mum==2){
            var out_alter2=document.getElementById("popupBasic2");
            out_alter2.style.display="none";
        }
        for(var key in input_text){
            if(input_text[key].value!=null)
            input_text[key].value="";
        }
    }
    window.moveout=moveout;
})();