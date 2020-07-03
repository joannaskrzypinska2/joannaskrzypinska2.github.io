var suma = 0;

$('#count-sum').click(function(){
    $('.salary').each(function(){
        suma += parseFloat($(this).text());
        console.log(parseFloat($(this).text()));
        $('#sum').text(suma);
    })});