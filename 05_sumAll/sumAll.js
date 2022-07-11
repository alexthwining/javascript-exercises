const sumAll = function(a, b) {
    /*
        arguments: a, b -> both integers

        let sum = 0;
        if a > b
            swap if true
        end

        loop: a to b (inclusive), starting at a
            sum += a;
        end

        return sum
    */

    if(a < 0 || b < 0 || typeof a != "number" || typeof b != "number" ) {
        return "ERROR";
    }
    
    if(a > b) {
        let t = b;
        b = a;
        a = t;
    }

    let sum = 0;
    for(; a <= b; a++) {
        sum += a;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
