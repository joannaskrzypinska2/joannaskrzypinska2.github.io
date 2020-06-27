// Pierwszy sposób z podanymi liczbami
// let liczby = [1,2,3];
// let i;
// let iloczyn = 1;

// for(i=0 ; i < liczby.length; i++) {
//     iloczyn *= liczby[i];
//   }
//     console.log(`Iloczyn elementów tablicy = ` + iloczyn);


// Drugi sposób z podanymi liczbami
// iloczynTablica([1,2,3]);
//     function iloczynTablica(parametr) {

//     let tablica = [];
//     tablica = parametr;

//     let multiplyResult = 1;

//     for(i=0 ; i < tablica.length; i++) {
//     multiplyResult *= tablica[i];
//   }
//     console.log(`Iloczyn elementów tablicy = ` + multiplyResult);
// }

//Trzeci sposób gdy nie mamy podanych liczb
// function iloczyn(n1, n2, n3) {
//     let result = n1 * n2 * n3;
//     return result; 
// }
// let wynikIloczynu = iloczyn(1,2,3);
// console.log(wynikIloczynu);

//Czwarty sposób ES6 gdy nie mam podanych liczb
const iloczyn = (n1, n2, n3) => {
    let result = n1 * n2 * n3;
    return result; 
}
let wynikIloczynu = iloczyn(1,2,3);
console.log(wynikIloczynu);

