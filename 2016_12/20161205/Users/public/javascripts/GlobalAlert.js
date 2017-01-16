/**
 * Created by plter on 2016/12/5.
 */

window.ucai = window.ucai || {};

(function () {

    var alertContainer = $("#alert-container");

    ucai.showAlert = function (message, alertClass) {
        alertClass = alertClass || "alert-warning";

        alertContainer.html(
            "<div class='alert " + alertClass + "' role='alert'>" +
            "   <span>" + message + "</span>" +
            "<button type='button' class='close' aria-label='close' data-dismiss='alert'>" +
            "   <span aria-hidden='true'>&times;</span>" +
            "</button>" +
            "</div>");
    };

    ucai.hideAlert = function () {
        alertContainer.empty();
    };

})();