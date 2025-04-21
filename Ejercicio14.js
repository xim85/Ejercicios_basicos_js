//!  EJERCICIO 14

// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]
function repeatCounter(list) {
  let counter = {}
  for (let word of list) {
    counter[word] = counter[word] + 1 || 1 // Si la palabra no existe, le asigna 1. Si la palabra existe, le suma 1 al valor actual.
  }
  return counter
}

console.log(repeatCounter(words))
