const count = (a, b, c) => {
    let result = Math.pow(b, 2)-4*a*c
    console.log(result);
    if (result < 0) {
        console.log("brak miejsc zerowych");
    } else if (result == 0) {
        console.log("jedno miejsce zerowe");
    } else if (result > 0) {
        console.log("dwa miejsca zerowe");
    }
}

count(2, -4, 2);
count(-1, 3, 4);
console.log(count);