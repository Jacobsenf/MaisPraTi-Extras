let a = 0, b = 1;
console.log(a);
for (let i = 1; i < 10; i++) {
  console.log(b);
  [a, b] = [b, a + b];
}
