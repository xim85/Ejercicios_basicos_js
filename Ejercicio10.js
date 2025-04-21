//!  EJERCICIO 10

const numbers = [12, 21, 38, 5, 45, 37, 6]

function average(numberList) {
  // Completar
  let suma = 0
  let media = 0
  for (let i = 0; i < numbers.length; i++) {
    suma += numberList[i]
  }
  media = suma / numberList.length
  return media
}
console.log(average(numbers))
