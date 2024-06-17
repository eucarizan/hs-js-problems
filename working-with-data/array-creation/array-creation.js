const originalArr = [3, 6, 0, 1, 4, 6, 8, 112];

let array = Array.from(originalArr);
let createNewArray = (value, start, end) => array.fill(value, start, end);

console.log(createNewArray(3, 0, 8));
