$(document).ready(function () {
    if (!$("#input").val()) {
        $("#input").focus();
    }
});


$(function () {
    $('#input').on('keypress', function (e) {
        $("#output").val(Math.ceil(parseInt($("#input").val() + e.key) * 1.1));
    });
});