# project

- [project](#project)
  - [workdays](#workdays)
  - [a short history of languages](#a-short-history-of-languages)
  - [what is your salary](#what-is-your-salary)
 
## workdays
<details>
<summary>Workdays</summary>

### description
Imagine that you are the head of your company and have to make a calendar of workdays for your employees.

Using the `switch` statement, show `Yes, you should go to work` in the `console.log` if the value is between `1` and `5`, inclusively. Otherwise, show `No, this is your well-deserved weekend!`

### examples
**Sample Input 1:**
```
1
```

**Sample Output 1:**
```
Yes, you should go to work
```

### solution
[workdays.js](./workdays.js)

</details>
 
## a short history of languages
<details>
<summary>A short history of languages</summary>

### description
Rewrite the `languageInfo` function using the `switch` operator.

```javascript
function languageInfo(language) {
  if (language === "JavaScript"){
    console.log("Begins on December 4, 1995");
  } else if (language === "Java") {
    console.log("Begins on May 23, 1995");
  } else if (language === "PHP") {
    console.log("Begins on June 8, 1995");
  }
}
```

### examples
**Sample Input 1:**
```
JavaScript

```

**Sample Output 1:**
```
Begins on December 4, 1995
```

### solution
[language-info.js](./language-info.js)

</details>
 
## what is your salary
<details>
<summary>What is your salary?</summary>

### description
Create a `switch` operator inside the function `getSalary`. It should show the following text in the `console.log` depending on the values:

value|text in console.log
:-:|:-:
"Bootstrap"|$15 per hour
"Chrome Extension"|$20 per hour
"React"|$30 per hour
other cases|$25 per hour

### examples
**Sample Input 1:**
```
Bootstrap

```

**Sample Output 1:**
```
$15 per hour
```

### solution
[select-salary.js](./select-salary.js)

</details>

[<<](../../../README.md)
<!--
:%s/\(Sample \(Input\|Output\) \d:\)\n\(.*\)/```\r\r**\1**\r```\3/gc
-->
