//!  EJERCICIO 9
// Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.

const numbers = [1, 2, 3, 5, 45, 37, 58]
let suma = 0
function sumNumbers(numberList) {
  // Completar código
  for (let i = 0; i < numbers.length; i++) {
    suma += numberList[i]
  }
  return suma
}
console.log(sumNumbers(numbers))
