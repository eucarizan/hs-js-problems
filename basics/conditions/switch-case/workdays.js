function checkTheDate(value) {
    switch (value) {
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
	    console.log("Yes, you should go to work");
	    break;
	default:
	    console.log("No, this is your well-deserved weekend!");
	    break;
    }
}

checkTheDate(1);
checkTheDate(2);
checkTheDate(5);
checkTheDate(6);
checkTheDate(0);
