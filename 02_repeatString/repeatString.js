const repeatString = function(str, n) {
	let complete = "";
	if(n < 0) {
		//throw new RangeError("Argument must be greater than 0");
		return "ERROR";
	}
	for(let i=0; i < n; i++) {
		complete = complete.concat(str);
	}

	return complete;
};

// Do not edit below this line
module.exports = repeatString;
