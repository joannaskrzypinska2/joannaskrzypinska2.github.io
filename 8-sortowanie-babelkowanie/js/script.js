function bubbleSort(parametr){
// zapisanie tablicy jako parametr funkcji
let array = [];
array = parametr;

for(let j = 1; j < array.length; j++){          // petla glowna (ilosc przebiegow = ilosci par w tablicy 
    for(i = 0; i < array.length-j; i++){       // petla sortujaca 
      if(array[i] > array[i+1]) {             // sprawdzenie czy liczba lewej jest wieksza do prawej
        var temp = array[i];                   // zamiana liczb 
        array[i] = array[i+1];
        array[i+1] = temp;
      }
    }
   }
   console.log(array);
  }
  
  bubbleSort([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]);