/**
 * Created by Administrator on 2016/9/26 0026.
 */
var box=document.getElementsByClassName("box");
var div= box[0].getElementsByTagName("div");
var i=0; var num=[]; var suiji_round=0;
var ondiv=[div[1],div[2],div[4],div[7],div[6],div[5],div[3],div[0]];
function round(end_num){
   num.push(end_num);
    console.log(num);
        if(i==0){
            ondiv[i].style.color="white";
            ondiv[i].style.background="#f40";
            i++;
            setTimeout("round(i)",800);
        }else if(i<8&&i>0){
            var timeout1=parseInt(800/(i+1));
            ondiv[i-1].style.color="#f40";
            ondiv[i-1].style.background="white";
            ondiv[i].style.color="white";
            ondiv[i].style.background="#f40";
            i++;
            setTimeout("round(i)",timeout1);
        }else if(i>=8&&i<(8*(suiji_round))){
            ondiv[(i-1)%8].style.color="#f40";
            ondiv[(i-1)%8].style.background="white";
            ondiv[i%8].style.color="white";
            ondiv[i%8].style.background="#f40";
            i++;
            setTimeout("round(i)",100);
        }else {
            var timeout2 = 100 + (i % 8) * 100;
            ondiv[(i - 1) % 8].style.color = "#f40";
            ondiv[(i - 1) % 8].style.background = "white";
            ondiv[i % 8].style.color = "white";
            ondiv[i % 8].style.background = "#f40";
            i++;

            if((i%(8*suiji_round))>num[0]){
                alert("结果为"+(num[0]+1));
                console.log("=============="+i);
                window.location.reload();
            }else{
                var on=setTimeout("round(i)", timeout2);
                //console.log(i)
            }
        }
}
var a_onclick=document.getElementById("start");
a_onclick.onclick=function(){
  var suiji=parseInt(Math.random()*8);
  suiji_round=parseInt(Math.random()*4)+2;
    round(suiji);
    console.log(suiji+"===="+suiji_round);
};

















