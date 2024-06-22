function blocks(a) {
    if (a) {
	console.log("yep");
    } else {
	console.log("nop");
    }
}

blocks(18 >= 18 && -4 > 100);
blocks(false);
blocks(true || 19 < 0);
blocks(5 < 6);
