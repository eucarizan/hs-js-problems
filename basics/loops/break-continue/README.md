# break and continue

- [break and continue](#break-and-continue)
  - [even or odd](#even-or-odd)
  - [the sum of numbers](#the-sum-of-numbers)
  - [the first occurrence](#the-first-occurrence)
 
## even or odd
<details>
<summary>Even or odd</summary>

### description
You are given an array of numbers called `numbers`. Write a cycle that logs `even` for each even number and `odd` for odd numbers. If the number is `0`, the program must stop processing the numbers.

>For `0`, the program should not print any messages.

### solution
[even-odd.js](./even-odd.js)

</details>
 
## the sum of numbers
<details>
<summary>The sum of numbers</summary>

### description
You are given an array of numbers called `numbers`. Calculate the sum of numbers and return it from the function. If the next number is `0`, the program must stop processing the numbers and return the result.

### examples
**Sample Input 1:**
```
11 12 15 10 0 100

```

**Sample Output 1:**
```
48

```

**Sample Input 2:**
```
100 0 100

```

**Sample Output 2:**
```
100
```

### solution
[sum.js](./sum.js)

</details>
 
## the first occurrence
<details>
<summary>The first occurrence</summary>

### description
Find the first occurrence of number `5` in the given array and return its index. If the number is not found, return `-1`.

### examples
**Sample Input 1:**
```
10 3 8 5 3 4 5

```

**Sample Output 1:**
```
3

```

**Sample Input 2:**
```
5 10 111 12

```

**Sample Output 2:**
```
0
```

### solution
[first-occurrence.js](./first-occurrence.js)

</details>

[<<](../../../README.md)
<!--
:%s/\(Sample \(Input\|Output\) \d:\)\n\(.*\)/```\r\r**\1**\r```\3/gc
-->
