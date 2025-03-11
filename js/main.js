$(document).ready(function () {
    alert("Принимаются платежи ТОЛЬКО от 1500 игровых рублей\nТранзакции через сервер \"Гидра\" НЕ производятся")
    if (!$("#input").val()) {
        $("#input").focus();
    }
});


$(function () {
    $('#input').on('keyup', function (e) {
        $("#output").val(Math.floor(parseInt($("#input").val()) * 1.113));
    });
});
