function SubstitutionCipher(abc1, abc2) {
    var objEncode = {},
        objDecode = {},
        len = abc1.length;
    for (var i = 0; i < len; i++) {
        objEncode[abc1[i]] = abc2[i];
        objDecode[abc2[i]] = abc1[i];

    }
    this.encode = function (str) {
        var len = str.length,
            newStr = '';
        for (var i = 0; i < len; i++) {
            newStr += objEncode[str[i]] || str[i];
        }
        return newStr;
    };
    this.decode = function (str) {
        var len = str.length,
            newStr = '';
        for (var i = 0; i < len; i++) {
            newStr += objDecode[str[i]] || str[i];
        }
        return newStr;
    };
}

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode("abc"));
console.log(sub.decode("eta"));