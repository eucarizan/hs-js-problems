function sum(a, b, c) {
    return --a + --b + --c;
}

console.log(sum(10, 11, -2) == 16);
console.log(sum(1, 1, 0) == -1);
