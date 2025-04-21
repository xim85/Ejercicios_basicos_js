//!  EJERCICIO 19

// Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato

const toys = [
  { id: 5, name: 'Transformers' },
  { id: 11, name: 'LEGO' },
  { id: 23, name: 'Hot Wheels' },
  { id: 40, name: 'Rascador de gato' },
  { id: 40, name: 'FurReal Friends gato interactivo' },
  { id: 60, name: 'Nerf Blaster' },
  { id: 71, name: 'Sylvanian Families - Familia gato' }
]
const toysWithoutCats = []
for (toy of toys) {
  if (!toy.name.includes('gato')) {
    const index = toys.indexOf(toy)
    toysWithoutCats.push(toy)
  }
}
console.log(toysWithoutCats)
