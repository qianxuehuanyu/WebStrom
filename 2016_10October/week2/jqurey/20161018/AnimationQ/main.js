/**
 * Created by plter on 10/18/16.
 */

(function () {

    var rect = $(".rect");

    rect.click(function () {
        rect.css({left: "0", top: "0", opacity: "1"});
        rect.animate({left: "200px"},1000).animate({top: "200px"},100).animate({opacity: "0.2"},"slow");
    });

})();