function find5(numbers) {
  let idx = -1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
      idx = i;
      break;
    }
  }
  return idx;
}

console.log(find5([10, 3, 8, 5, 3, 4, 5]) == 3);
console.log(find5([5, 10, 111, 12]) == 0);
