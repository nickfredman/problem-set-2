var firstReverse = function (string) {
    var stringArr = [];
    for (var i = 0; i < string.length ; i ++ ) {
        var letter = string.slice(i,i+1);
        stringArr.unshift(letter);
    }
    return stringArr.join("");
}

var firstReverse2 = function (string) {
    return string.split("").reverse().join("");
}

console.log(firstReverse("hello"));
console.log(firstReverse2("hello"));

var swapCase = function (string) {
    var newString = [];
    for(var i = 0; i < string.length; i++) {
        if(string.charAt(i) === string.charAt(i).toUpperCase()) {
            newString.push(string.charAt(i).toLowerCase());
        } else {
            newString.push(string.charAt(i).toUpperCase());
        }
    }
    return newString.join("");
}

console.log(swapCase("Hello World"));

