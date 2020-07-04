$(document).ready(function () {
    $('#btn').click(function () {
    $('p:last').insertBefore('p:first');
    console.log($('p:last'))})
    
    $('body').append('<button id="btn2">Down</button>');
    $('#btn2').insertAfter('#btn');
    $('#btn2').css("display", "inline");
    
    $('#btn2').click(function () {
        $('p:first').insertAfter('p:last');
        console.log($('p:first'))}

    )});