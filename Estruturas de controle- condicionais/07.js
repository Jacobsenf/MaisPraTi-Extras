let num1 = 10, num2 = 5, operador = '+';
let resultado;

switch (operador) {
  case '+':
    resultado = num1 + num2;
    break;
  case '-':
    resultado = num1 - num2;
    break;
  case '*':
    resultado = num1 * num2;
    break;
  case '/':
    resultado = num1 / num2;
    break;
  default:
    console.log("Operador inválido");
    break;
}

if (resultado !== undefined) {
  console.log(`Resultado: ${resultado}`);
}
