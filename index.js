var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
var date = new Date();
var month = date.getMonth() + 1;
var year = date.getFullYear();


$(function () {
    $(".month-name").each(function (index) {
        $(this).text(months[index]);
    });

    $(".month-days").each(function (index) {
        $(this).text(new Date(year, index+1, 0).getDate());
    });
});