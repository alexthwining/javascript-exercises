const reverseString = function(str) {
	let words = str.split(' ');
	console.log(words.length);
	let rev = "";
	if(words.length > 1) {
	    for(let i=0; i < words.length; i++) {
	        let wrd = words[i].split('');
		
	    }

	}
	else {
	    let wrd = words[0].split('');
	    for(let i=0; i < wrd.length; ) {
	    rev = rev + wrd.pop();
	}


	return rev;

};

// Do not edit below this line
module.exports = reverseString;
