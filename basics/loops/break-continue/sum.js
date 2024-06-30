function sum(numbers) {
  let sum = 0;
  for (i in numbers) {
    if (numbers[i] === 0) {
      break;
    }
    sum += numbers[i];
  }
  return sum;
}

console.log(sum([11, 12, 15, 10, 0, 100]) == 48);
console.log(sum([100, 0, 100]) == 100);

