function checkEvenOrOdd(numbers) {
  for (i in numbers) {
    if (numbers[i] == 0) {
      break;
    }
    
    if (numbers[i] % 2 == 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  }
}

checkEvenOrOdd([0, 1, 2, 3]);
console.log();
checkEvenOrOdd([1, 2, 3, 4]);
console.log();
checkEvenOrOdd([1, 2, 0, 3, 4]);
console.log();
checkEvenOrOdd([1, 2, 3, 4, 0, 5]);
