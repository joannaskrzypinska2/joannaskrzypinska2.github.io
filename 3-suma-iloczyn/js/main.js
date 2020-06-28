/* Pierwsza wersja */

let liczby= [1,2,3,4,5,6];
let suma=0;
let iloczyn=1;

for(let i=0 ; i < liczby.length; i++) {
  suma += liczby[i];
  iloczyn *= liczby[i];
}

  console.log(`Suma elementów tablicy = ` + suma);
  console.log(`Iloczyn elementów tablicy = ` + iloczyn);

  /* Druga wersja: */

  
  function addAndMultiply(parametr){

    // zapisanie tablicy jako parametr funkcji
    let array = [];
    array = parametr;
  
    // utworzenie zmiennych do sumowania i iloczynu
    let multiplyResult = 1 ;
    let addResult = 0 ;
    
    for(let i = 0 ; i < array.length ; i++){
      multiplyResult *= array[i];
      addResult += array[i];
    }
    
    console.log('Suma elementów tablicy = ' + addResult);
    console.log('Iloczyn elementów tablicy = ' + multiplyResult );
    
  }
  // wywołanie funkcji
  addAndMultiply([1, 2, 3, 4, 5, 6]);
