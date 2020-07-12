const bubbleSort = (sortArray) => {
  for (j =1; j < sortArray.length; j++) {
    for (i = 0; i < sortArray.length - j; i++) {
      if (sortArray[i] > sortArray[i + 1]) { // sprawdzenie czy liczba lewej jest wieksza do prawej
        let temp = sortArray[i];  // zamiana liczb 
        sortArray[i] = sortArray[i + 1];
        sortArray[i + 1] = temp;
      }
    }
  }
  console.log(sortArray);
}

bubbleSort([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]);
