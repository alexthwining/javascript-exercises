const removeFromArray = function(arr, ...args) {
    /*
        arr = [1,2,3,4] 
        need to remove: args = [?, ?, ?...]

        res = [] -> result array

        loop: iterate through arr
            check if element included in arr
            if not in arr,
                res.push(arr[i])
            end
        end

    */
    
    let res = [];
    arr.forEach((ele) => {
        // found out about Array.includes() which makes it a lot easier
        if(!args.includes(ele)) {
            res.push(ele);
        }
    });

    return res;

};


// Do not edit below this line
module.exports = removeFromArray;
