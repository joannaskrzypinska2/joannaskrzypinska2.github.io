let jsonPracownicy = {
  "pracownicy": [
      { "firstName": "Krystian", "lastName": "Dziopa" },
      { "firstName": "Anna", "lastName": "Szapiel" },
      { "firstName": "Piotr", "lastName": "Żmuda" }
]
}

console.log(jsonPracownicy);
let employee = jsonPracownicy.pracownicy[0];
for (let property of Object.keys(employee)) {
console.log(property);
console.log(employee);
console.log(`Klucz: ${property}, Wartość: ${employee[property]}`);
}

/* const obj = jsonPracownicy.pracownicy[0]
Object.keys(jsonPracownicy.pracownicy[0]).forEach( key => {
console.log(`Klucz: ${key}, Wartość: ${obj[key]}`)
}) */

// const obj = jsonPracownicy.pracownicy[0]
// Object.keys(obj).forEach( key => {
//  console.log(`Klucz: ${key}, Wartość: ${obj[key]}`)
// })









/* 
  var obj = { 'France': 'Paris', 'England': 'London' };
// Iterate over the property names:
for (let country of Object.keys(obj)) {
    var capital = obj[country];
    console.log(country, capital);
}
 */