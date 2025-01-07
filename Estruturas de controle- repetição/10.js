let a = 56, b = 98;
while (a !== b) {
  if (a > b) {
    a -= b;
  } else {
    b -= a;
  }
}
console.log(a); // MDC
