const fibonacci = (n) => {
    if (n < 0) {
        throw new Error(`nie ma ujemnych elementów w fibonacci`);
    } else if ( n === 0 ) {
        return 0;
    } else if ( n === 1 ) {
        return 1;
    }
    
    // utworzenie zmiennych do ...?
    let prev = 0;
    let cur = 1;
    let buffor = 1;

    //pętla
    for (let i = 2; i <= n; i++) {
        buffor = prev + cur;
        prev = cur;
        cur = buffor;
        // console.log(i);
    }
    return cur;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));

// fib(0) = 0
// fib(1) = 1
// fib(2) = 1
// fib(3) = 2
// fib(4) = 3
// fib(5) = 5