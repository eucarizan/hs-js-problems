# date

- [date](#date)
  - [tired programmer](#tired-programmer)
  - [hours of our life](#hours-of-our-life)
  - [mixed everything up](#mixed-everything-up)
 
## tired programmer
<details>
<summary>Tired programmer</summary>

### description
The programmer worked day and night, so he was tired and forgot how to count the number of milliseconds in 20 days! Help him count and insert the given number as the argument to the Date() constructor.

### solution
[tired.js](./tired.js)

</details>
 
## hours of our life
<details>
<summary>Hours of our life</summary>

### description
The information about the date of birth of our imaginary friend is stored in the `birthday` variable. The information about when he started school is stored in the `firstDayInSchool` variable. Print the number of hours that passed between these two events (the date difference will give you the span of time in milliseconds, don't forget to convert them to hours).

### solution
[hours-until-school.js](./hours-until-school.js)

</details>
 
## mixed everything up
<details>
<summary>Mixed everything up</summary>

### description
A novice programmer wrote a code that counts the difference between two events and adds a year to the resulting expression in milliseconds. But the fluffy cat ran over the keyboard and messed up the code! Help to restore the code so that it works without errors and displays the received time in days in the console (broken lines are marked with `!?`).

```javascript
let firstEventDate = new Date("2011-01-11")
let secondEventDate = Date("2023-04-26") //!?
let differenceWithSum = secondEventDate - firstEventDate + 3600 * 24 * 365 *  //!?

console.log(differenceWithSum / 1000 / 3600 / 24)
```

### solution
[mixed-up.js](./mixed-up.js)

</details>

[<<](../../../README.md)
<!--
:%s/\(Sample \(Input\|Output\) \d:\)\n\(.*\)/```\r\r**\1**\r```\3/gc
-->
