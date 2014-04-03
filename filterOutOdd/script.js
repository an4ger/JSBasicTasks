function getEvenNumbers(numbersArray){
    return numbersArray.filter(function(n){
        return (n % 2 == 0);
    });
}