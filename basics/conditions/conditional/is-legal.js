const legalAge = 18;
let age = 18;
let condition = age < legalAge;
let checkIfMinor = a => {
  if (a) {
    console.log("Sorry, but you are a minor.");
  } else {
    console.log("That's ok. You can enter the pub.");
  }
};
checkIfMinor(condition);

