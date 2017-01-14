/**
 * Created by Administrator on 2016/10/17 0017.
 */
(function () {
    var indiv= $("div");
    var ondiv=document.getElementsByTagName("div");
    for(var i=0;i<indiv.length;i++){
        console.log(indiv);
        console.log(ondiv);

    }

    $("div").each(function (one,two) {

        console.log(one);
        $(two).html("Item"+one);
        console.log(two);
    });
})();