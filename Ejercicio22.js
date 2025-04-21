//!  EJERCICIO 22

//Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.Recuerda no usar frutas duplicadas.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

let fruitIndex = 0
for (food of foodSchedule) {
  if (food.isVegan === false) {
    food.name = fruits[fruitIndex]
    food.isVegan = true
    fruitIndex++
  }
}
console.log(foodSchedule)
