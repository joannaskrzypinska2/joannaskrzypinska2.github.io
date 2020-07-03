$(document).ready(function () {
    const square = $('div');
    $('#btn').click(function () {
        square.animate({ 'margin-left': '100px', height: '100px', width: '100px' }, 3000, function () {
            $(this).css({ backgroundColor: 'blue', "transition": '3s' }), 2000, setTimeOut(function () {
                $(this).after('<p>Animacja zakończona</p>')
            }, 3000);
        })
    })
});