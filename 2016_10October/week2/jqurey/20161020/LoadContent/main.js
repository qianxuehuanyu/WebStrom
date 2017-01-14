/**
 * Created by plter on 10/20/16.
 */


(function () {

    $("#container").load("content.htm", function (result, status) {
        // console.log(arguments);参数列表

        if (status == "error") {
            $(this).html("加载内容失败");
        }
    });

})();