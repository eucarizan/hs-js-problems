# conditional operators

- [conditional operators](#conditional-operators)
  - [going out tonight](#going-out-tonight)
  - [code correcting](#code-correcting)
 
## going out tonight
<details>
<summary>Going out tonight?</summary>

### description
Imagine you want to go to the pub this evening but look too young. The pub staff knows nothing about your age, so now you must implement the age-checking procedure.

Set the value of `18` to the variable `age`. Set the condition of age checking to the `condition` variable: is your age less than 18 or not? If so, you must write in the console, `Sorry, but you are a minor`. If the age is over or equal to 18, the message is `That's ok. You can enter the pub`.

### solution
[is-legal.js](./is-legal.js)

</details>
 
## code correcting
<details>
<summary>Code correcting</summary>

### description
Change the code so that the result of printing will be Anna is going to study at University.

```javascript
let age = 6;

if (age < 6) {
        console.log("Anna is a little child");
} else if (age >= 6 && age < 18) {
        console.log("Anna goes to school");
} else if (age === 18) {
        console.log("Anna is going to study at University");
} else if (age > 18 && age < 22) {
        console.log("Anna studies at University");
} else {
        console.log("Anna works");
}
```

### solution
[code-correct.js](./code-correct.js)

</details>

[<<](../../../README.md)
<!--
:%s/\(Sample \(Input\|Output\) \d:\)\n\(.*\)/```\r\r**\1**\r```\3/gc
-->
