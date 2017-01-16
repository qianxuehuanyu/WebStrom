/**
 * Created by plter on 2016/11/28.
 */

(function () {
    var files;
    var datain=[]; var lrcObject=[];var lrcDiv=$("#songlrc");
    $("#area").on("dragover", function (e) {
        e.preventDefault();
    }).on("drop", function (e) {
        e.preventDefault();
        files = e.originalEvent.dataTransfer.files;
        if (files && files.length) {
            read(files.length);
        }
    });
    function read(j){
        "use strict";
        j--;
        var inreader = new FileReader();
        inreader.readAsDataURL(files[j]);
        inreader.onload=function () {
            $("#area").prepend('<p><span>'+files[j].name+'</span><button value="'+datain.length+'">播放</button></p>');
            var indata={name:files[j].name,url:inreader.result};
            datain.push(indata);
            $("#music").html('<audio controls="controls" id="audio" src="'+inreader.result+'" </audio>');
            addonclick();
            if(j==0){
                changesong(files[j].name);
            }else{
                read(j);
            }
        };

    }

    function addonclick(){
        "use strict";
        var lastp=$("#area p:last span");
        var pbutton=$("#area p:last button");
        pbutton.click( function () {
            $("#music").html('<audio controls="controls" id="audio" src="'+datain[this.value].url+'" </audio>');
            lrcObject=[];
            changesong(lastp.text());
        });
        lastp.click(function () {
            pbutton.click();
        });
    }
    function changesong(objname){
        "use strict";
        var namechange=/\.+(mp3|wma|wav)/;
        var result=namechange.exec(objname);
        var name=objname.replace(result[0],"");
        name="song/"+name+".lrc";
        $.get(name, function (data) {
            "use strict";
            var p = /\[(\d{2}):(\d{2})\.\d{2}\](.*)/g;
            var result;
            while (result = p.exec(data)) {
                lrcObject[parseInt(result[1]) * 60 + parseInt(result[2])] = result[3];
                //console.log(result);
            }
            //console.log(lrcObject,lrcObject[0]);
            //$("#songlrc").html(data);
            lrcDiv.html(lrcObject[0]);
        });
        var addsong=document.querySelector("audio");
        addsong.play();
        setInterval(function () {
            var sec = Math.round(addsong.currentTime);
            var content = lrcObject[sec];
            if (content) {
                lrcDiv.html(content);
            }
        }, 1000);

    }

})();