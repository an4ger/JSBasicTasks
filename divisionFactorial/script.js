function factorialDivision(n, d) {
    var a = 1,
        i = d+1;
    while (i <= n) {
        a *= i;
        i++;
    }
    return a;
}

//recursion
function factorialDivisionR(n, d) {
    if(n == d) return 1;
    return n*factorialDivision(n-1, d);
}

factorialDivision(5, 20);