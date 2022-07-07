const reverseString = function(str) {
    let words = str.split('');
    let res = "";
    while(words.length > 0) {
        res = res + words.pop();
    }

    return res;

};

// Do not edit below this line
module.exports = reverseString;
