const countCost = (cenaPaliwa, dlugoscTrasy, srednieSpalanie) => {
    let result = dlugoscTrasy/100*srednieSpalanie*cenaPaliwa
    console.log(result);
}

countCost(5, 120, 6);
console.log(countCost);
