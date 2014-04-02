function keysAndValues(data){
    var keys = [],
        values = [],
        key;
    for (key in data) {
        keys.push(key);
        values.push(data[key]);
    }
    return [keys ,values];
}

keysAndValues({a: 1, b: 2, c: 3});