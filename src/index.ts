// EJERCICIO "DIVISORES"

let numero: number = Number(prompt("Por favor, ingrese un número"));

function cantidadDeDivisores(numero: number): number {
  let contador: number = 0;
  let divisor: number;
  for (divisor = 1; divisor <= numero; divisor++) {
    if (numero % divisor === 0) {
      contador = contador + 1;
    } else {
      contador = contador + 0;
    }
  }
  return contador;
}

console.log(
  "La cantidad de divisores del número ingresado es: ",
  cantidadDeDivisores(numero)
);
