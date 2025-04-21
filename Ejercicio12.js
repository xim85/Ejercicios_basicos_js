//!  EJERCICIO 12

// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(list) {
  // Completar
  let arrayWithoutDuplicates = []
  for (let i = 0; i < list.length; i++) {
    if (!arrayWithoutDuplicates.includes(list[i])) {
      arrayWithoutDuplicates.push(list[i])
    }
  }
  return arrayWithoutDuplicates
}

console.log(removeDuplicates(duplicates))
