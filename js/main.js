$(document).ready(function () {
    if (!$("#input").val()) {
        $("#input").focus();
    }
});


$(function () {
    $('#input').on('keyup', function (e) {
        $("#output").val(Math.ceil(parseInt($("#input").val()) * 1.1));
    });
});
