# while and do while

- [while and do while](#while-and-do-while)
  - [mistake](#mistake)
  - [a bus driver](#a-bus-driver)
  - [elevator problem](#elevator-problem)
 
## mistake
<details>
<summary>Mistake</summary>

### description
Find and correct a mistake in the following code:
```javascript
let n = 5;
do (n < 10) {
        n = n + 1;
	    console.log(n);
} while;
```

### solution
[mistake.js](./mistake.js)

</details>
 
## a bus driver
<details>
<summary>A bus driver</summary>

### description
Imagine that you are a bus driver. You stop at a traffic light and see your friend Harry crossing the road. While the light is red, you greet your friend, and yell: *Hey Harry!* The light turns green once you greet each other, and you must keep driving.

Interpret this scenario using the `while` loop. Create a variable `isRed` and set the initial value to `true`. Display the message `Hey Harry!` inside the loop, and then, when the light goes green, change the value of the `isRed` variable.

### solution
[bus-driver.js](./bus-driver.js)

</details>
 
## elevator problem
<details>
<summary>Elevator problem</summary>

### description
Assume you are taking a glass elevator to the 10th floor of a business center. While below the 6th floor, all you see is twigs of the trees growing near the center. Once you get higher though, you get a wonderful view of the city.

Set the variable `n = 1` which will increase the number of the floor you've reached consequently, one by one. Check if that number is not greater than `10` in the `while` loop. If you are lower than the 6th floor, display `Tree!`, otherwise, display `City!`

### solution
[elevator.js](./elevator.js)

</details>

[<<](../../../README.md)
<!--
:%s/\(Sample \(Input\|Output\) \d:\)\n\(.*\)/```\r\r**\1**\r```\3/gc
->
