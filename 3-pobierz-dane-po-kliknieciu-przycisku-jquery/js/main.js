$(document).ready(function () {

    // pobranie buttona w jQuery i ustawienie nasłuchu zdarzenia i funkcja anonimowa obsługująca tego click'a
    $('#download-data').click(function () {

        // Wariant 1 - pobieranie danych za pomocą funkcji $.get()
        // $.get('https://akademia108.pl/api/ajax/get-post.php')
        //     .done(function (data) {
        //         // console.log(data);
        //         // console.log(data.id);

        //         let pId = $('<p></p>').text(`Post ID: ${data.id}`);
        //         let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
        //         let pTitle = $('<p></p>').text(`Title: ${data.title}`);
        //         let pBody = $('<p></p>').text(`Body: ${data.body}`);
        //         let hr = $('<hr />');

        //         console.log(pId);

        //         $('body').append(pId);
        //         $('body').append(pUserId);
        //         $('body').append(pTitle);
        //         $('body').append(pBody);
        //         $('body').append(hr);

        //     })
        //     .fail(function (error) {
        //         console.error(error);
        //     });

        // Wariant 2 - pobieranie danych za pomocą funkcji $.getJSON()
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr = $('<hr />');

                console.log(pId);

                $('body').append(pId);
                $('body').append(pUserId);
                $('body').append(pTitle);
                $('body').append(pBody);
                $('body').append(hr);

            })
            .fail(function (error) {
                console.error(error);

            });
    });

});