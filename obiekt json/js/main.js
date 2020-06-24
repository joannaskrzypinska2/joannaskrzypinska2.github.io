let jsonPracownicy = {
    "pracownicy": [
        { "firstName": "Krystian", "lastName": "Dziopa" },
        { "firstName": "Anna", "lastName": "Szapiel" },
        { "firstName": "Piotr", "lastName": "Żmuda" }
    ]
}

console.log(jsonPracownicy.pracownicy);

const pracownicy = (element, index) => {
    console.log(`Element z indeksem: ${index} ma wartość ${element.firstName} ${element.lastName}`);
}

jsonPracownicy.pracownicy.forEach(pracownicy);