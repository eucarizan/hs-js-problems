function getSalary(value) {
  let cost = 0;
  switch(value) {
    case "Bootstrap":
      cost = 15;
      break;
    case "Chrome Extension":
      cost = 20;
      break;
    case "React":
      cost = 30;
      break;
    default:
      cost = 25;
      break;
  }
  return `$${cost} per hour`;
}

console.log(getSalary("Bootstrap"));
console.log(getSalary("Chrome Extension"));
console.log(getSalary("React"));
console.log(getSalary("Other"));
