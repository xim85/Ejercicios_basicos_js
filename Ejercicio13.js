//!  EJERCICIO 13

//Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function nameFinder(nameList, valueToFind) {
  return {
    exists: nameList.includes(valueToFind),
    position: nameList.indexOf(valueToFind) + 1
  }
}

console.log(nameFinder(names, 'Bruce'))
