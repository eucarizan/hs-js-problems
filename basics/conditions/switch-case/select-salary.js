function getSalary(value) {
  switch(value) {
    case "Bootstrap":
      return "$15 per hour";
    case "Chrome Extension":
      return "$20 per hour";
    case "React":
      return "$30 per hour";
    default:
      return "$25 per hour";
  }
}

console.log(getSalary("Bootstrap"));
console.log(getSalary("Chrome Extension"));
console.log(getSalary("React"));
console.log(getSalary("Other"));
