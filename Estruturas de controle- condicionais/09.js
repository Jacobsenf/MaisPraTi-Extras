let idade = 25;
let faixaEtaria;

if (idade >= 0 && idade <= 12) {
  faixaEtaria = "Criança";
} else if (idade >= 13 && idade <= 17) {
  faixaEtaria = "Adolescente";
} else if (idade >= 18 && idade <= 59) {
  faixaEtaria = "Adulto";
} else {
  faixaEtaria = "Idoso";
}

switch (faixaEtaria) {
  case "Criança":
    console.log("Você é uma criança.");
    break;
  case "Adolescente":
    console.log("Você é um adolescente.");
    break;
  case "Adulto":
    console.log("Você é um adulto.");
    break;
  case "Idoso":
    console.log("Você é um idoso.");
    break;
}
