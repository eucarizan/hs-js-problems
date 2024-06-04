function count(str) {
    let charCount = 0;
    let numCount = 0;
    let charegex = /[a-z]/;
    let numregex = /[0-9]/;
    for (let i = 0; i < str.length; i++) {
	let ch = str.charAt(i);
	if (charegex.test(ch)) {
	    charCount++;
	} else if (numregex.test(ch)) {
	    numCount++;
	}
    }
    console.log(numCount + " " + charCount);
}

count("a1b2c3");
count("abcdef");
