// EJERCICIO "DIVISORES"

/*
• Implemente un método llamado cantidadDeDivisores que
reciba un número entero y devuelva la cantidad de divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
16, por lo que la respuesta debería ser 5

COMENTARIO: NO COMPRENDO EXACTAMENTE A QUÉ HACE REFERENCIA EL SIGUIENTE INCISO:
• Re-utilice el método esMultiplo implementado para el ejercicio
anterior
*/

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
