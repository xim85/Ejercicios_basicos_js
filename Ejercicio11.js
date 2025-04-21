//!  EJERCICIO 11

const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]
function averageWord(list) {
  // Completar
  let suma = 0
  for (let i = 0; i < mixedElements.length; i++)
    if (typeof list[i] === 'number') {
      suma += list[i]
    } else if (typeof list[i] === 'string') {
      suma += list[i].length
    }
  return suma / list.length
}

console.log(averageWord(mixedElements))
