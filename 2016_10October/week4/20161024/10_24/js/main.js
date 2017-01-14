/**
 * Created by Administrator on 2016/10/24 0024.
 */
(function () {

    var fileField = $("#filefield");
    var btnBrowse = $("#btn-browse");
    btnBrowse.button();
    var restart=0;
    function showImage(file,num) {
        var reader = new FileReader();
        reader.onload = function () {
            $("#imgs"+num).html("<img src='" + reader.result + "'>");
        };
        reader.readAsDataURL(file);
    }

    btnBrowse.click(function () {
        fileField.click();
        //window.location.reload();
        if(restart==0){
            var new_button=document.createElement("button");
            new_button.value="box"+restart;
            new_button.innerText="关闭";
            new_button.onclick= function () {
                $("#"+this.value).remove();
                $(this).remove();
                $("#inline"+this.value).remove();
            };
            document.body.appendChild(new_button);

            var inline=document.createElement("div");
            inline.id="inlinebox"+restart;
            inline.style.cssText="width:400px;height:4px;margin:5px 0;background:#000;";
            document.body.appendChild(inline);
        }else{
            var new_div=document.createElement("div");
            new_div.id="box"+restart;
            document.body.appendChild(new_div);
            var new_button=document.createElement("button");
            new_button.value="box"+restart;
            new_button.innerText="关闭";
            new_button.onclick= function () {
                $("#"+this.value).remove();
                $(this).remove();
                $("#inline"+this.value).remove();
            };
            document.body.appendChild(new_button);
            var inline=document.createElement("div");
            inline.id="inlinebox"+restart;
            inline.style.cssText="width:400px;height:4px;margin:5px 0;background:#000;";
            document.body.appendChild(inline);
        }
    });

    fileField.change(function () {
        for(var i=0;i<this.files.length;i++){
            var imgsid=""+restart+i;
            $("#box"+restart).append("<h3>N&nbsp;"+i+"</h3>");
            $("#box"+restart).append("<div id='imgs"+imgsid+"'></div>");
            showImage(this.files[i],imgsid);
        }
        $("#box"+restart).accordion();
        for(var i=0;i<this.files.length;i++){
            var divid="imgs"+restart+i;
            var imgid="imgs"+restart+i+">img";
            var change_div=$("#"+divid);
            change_div.css("height",400);
            var change_img=$("#"+imgid);
            change_img.css("height",300);
        }
        restart++;
    });
})();