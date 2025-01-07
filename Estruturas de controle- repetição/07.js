let num = 12345;
let count = 0;
do {
  count++;
  num = Math.floor(num / 10);
} while (num > 0);
console.log(count);
