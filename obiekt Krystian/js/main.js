let jsonPracownicy = {
    "pracownicy": [
        { "firstName": "Krystian", "lastName": "Dziopa" },
        { "firstName": "Anna", "lastName": "Szapiel" },
        { "firstName": "Piotr", "lastName": "Żmuda" }
]
}


for (let element of Object.keys(jsonPracownicy.pracownicy[0])) {
  let employee = jsonPracownicy.pracownicy[element];
  console.log(`Klucz: ${element}, Wartość: ${employee}`);
}











/* 
  var obj = { 'France': 'Paris', 'England': 'London' };
// Iterate over the property names:
for (let country of Object.keys(obj)) {
    var capital = obj[country];
    console.log(country, capital);
}
 */