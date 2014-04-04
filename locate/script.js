var locate = function(arr, value){
    return arr.some(function(item) {
        return typeof(item) == 'object' ? locate(item, value) : item === value;
    });
};

locate(['a','b',['c','d',['e']]],'e'); // should return true
locate(['a','b',['c','d',['e']]],'a'); // should return true
locate(['a','b',['c','d',['e']]],'f'); // should return false
