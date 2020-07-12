// Pobieramy przycisk za pomocą zmiennej.
let btn = document.getElementById('get-data');

// Funkcja
const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(response => response.json())
    .then(data => {

        // stworzenie nowych elementów DOM
        let pUserID = document.createElement('p');
        let pID = document.createElement('p');
        let pTitle = document.createElement('p');
        let pBody = document.createElement('p');
        let hr = document.createElement('hr');

        // dodanie tekstu
        pUserID.innerText = `User ID: ${data.userId}`;
        pID.innerText = `ID: ${data.id}`;
        pTitle.innerText = `Title: ${data.title}`;
        pBody.innerText = `Body: ${data.body}`;

        // dodanie paragrafów (elementów) do strony
        document.body.appendChild(pUserID);
        document.body.appendChild(pID);
        document.body.appendChild(pTitle);
        document.body.appendChild(pBody);
        document.body.appendChild(hr);
    
        // console.log(pID);
    })
    .catch(error => {
        console.error(error);
    })
    console.log(`getData()`);
}

// Ustaw nasłuch zdarzenia click na tym przycisku.
btn.addEventListener('click', getData); 