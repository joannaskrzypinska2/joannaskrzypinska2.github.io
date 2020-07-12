console.log('jQuery - $.getJSON()');

$('#download').click(function () {
    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
        console.log(data);
        $('#download').after($('<div>', {
            id: 'dane-programisty'
            }));
        $("#dane-programisty").append("<br>Imię: " + data.imie, "<br>Nazwisko: " + data.nazwisko, "<br> Zawód: " + data.zawod, "<br>Firma: " + data.firma);
});
});
