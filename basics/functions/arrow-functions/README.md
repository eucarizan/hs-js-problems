# arrow functions

- [arrow functions](#arrow-functions)
  - [working code](#working-code)
  - [captain](#captain)
  - [arrow function to square a number](#arrow-function-to-square-a-number)
  - [mistake](#mistake)
  - [code correcting](#code-correcting)
  - [multiplication](#multiplication)
 
## working code
<details>
<summary>Working code</summary>

### description
Change the code to make it work.
```javascript
let func1 = () => a / b + a * b;
let func2 = () => c + 5 * d / c;
// change the code above this line
let result = 7 - func1(50, 4) / func2(40, 30);
```

### solution
[working-code.js](./working-code.js)

</details>
 
## captain
<details>
<summary>captain</summary>

### description
Define a function that will add the word `captain` before the name of a person. There should be one space after the word `captain`.

The function should be named `captainAdder` and accept one parameter `name` as an argument.

The function should return a string, not print it to the console.

### examples
**Sample Input 1:**
```
Jack Sparrow

```

**Sample Output 1:**
```
captain Jack Sparrow
```

### solution
[captain.js](./captain.js)

</details>
 
## arrow function to square a number
<details>
<summary>Arrow function to square a number</summary>

### description
Create an arrow function that takes a single number as input and returns the square of that number. The input will be a single integer on a line. Print the squared result.

### examples
**Sample Input 1:**
```
5

```

**Sample Output 1:**
```
25

```

**Sample Input 2:**
```
0

```

**Sample Output 2:**
```
0
```

### solution
[square-of-number.js](./square-of-number.js)

</details>
 
## mistake
<details>
<summary>Mistake</summary>

### description
Find the mistake in setting the arrow function and fix it:
```javascript
let func = (a, b) => ( return a * b);
console.log(func(5, 10));
```

### solution
[mistake.js](./mistake.js)

</details>
 
## code correcting
<details>
<summary>code correcting</summary>

### description
Find the error in the code below and fix it.
```javascript
let someFunc = (k, l, m) = k + l + m;
someFunc();
```

### solution
[code-correct.js](./code-correct.js)

</details>
 
## multiplication
<details>
<summary>Multiplication</summary>

### description
Declare the function named multiplication, which takes any two numbers as parameters and returns the result of their multiplication.

**Sample Input 1**:
```
2 6
```

**Sample Output 1**:
```
12
```

### solution
[multiply.js](./multiply.js)

</details>

[<<](../../../README.md)
<!--
:%s/\(Sample \(Input\|Output\) \d:\)\n\(.*\)/```\r\r**\1**\r```\3/gc
-->
