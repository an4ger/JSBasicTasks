function factorialDivision(n, d) {
    var a = 1,
        i = d+1;
    while (i <= n) {
        a *= i;
        i++;
    }
    return a;
}