const removeFromArray = function(arr, ...args) {
    /*
        arr = [1,2,3,4] 
        need to remove: args = [?, ?, ?...]

        res = [] -> result array

        get first argument: args.shift()
        let lookFor = args.shift()

        loop: iterate i
            find index of lookFor
            if i == lookFor; continue;

            res.push(arr[i])

            if: (args.length > 0)
                lookFor = args.shift()
            end
        end

    */
    
    console.log(arr);

    let res = [];
    let lookFor = args.shift(); // first argument
    console.log("starting lookFor:" + lookFor);
    let i = 0;
    for( ; i < arr.length; i++) {
        let ind = arr.indexOf(lookFor);
        console.log("index of LF: " + ind);
        console.log("i :" + i);
        if (ind == i) {
            console.log("skipped: " + arr[i]);
            continue; 
        }

        res.push(arr[i]);
        
        if(arr.indexOf(lookFor) && args.length > 0) {
            i = 0;
            lookFor = args.shift();
            console.log("lookFor inside: " + lookFor);
        }
    }

    console.log(res);
    return res;
};

// testing
console.log(removeFromArray([1,2,3,4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
