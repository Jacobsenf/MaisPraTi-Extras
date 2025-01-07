let nota1 = 8, nota2 = 7, nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;
let conceito;

if (media >= 9) {
  conceito = "A";
} else if (media >= 7.5) {
  conceito = "B";
} else if (media >= 6) {
  conceito = "C";
} else if (media >= 4) {
  conceito = "D";
} else if (media >= 2) {
  conceito = "E";
} else {
  conceito = "F";
}

console.log(`Média: ${media.toFixed(2)} - Conceito: ${conceito}`);
