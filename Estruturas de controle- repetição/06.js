let num = 121;
let original = num;
let reversed = 0;
while (num > 0) {
  reversed = reversed * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(original === reversed ? "É palíndromo" : "Não é palíndromo");
