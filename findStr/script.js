function checkSpam(str) {
    var newStr = str.toLowerCase();

    // вызов ~n эквивалентен выражению -(n+1) : ноль только в случае, когда n == -1.
    if (~newStr.indexOf('viagra') || ~newStr.indexOf('xxx')) {
        return true;
    }
    else return false;
}
alert(checkSpam('str iagra xdxxx iagra'));