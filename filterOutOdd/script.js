function getEvenNumbers(numbersArray){
    return numbersArray.filter(function(n){
        return (n % 2 == 0);
    });
}

getEvenNumbers([2,4,5,6]); // [2,4,6]