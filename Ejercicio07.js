//!  EJERCICIO 7

function greaterNumber(numberOne, numberTwo) {
  // Completar código
  if (numberOne > numberTwo) {
    console.log(
      'El número más alto entre ' +
        numberOne +
        ' y ' +
        numberTwo +
        ' es: ' +
        numberOne
    )
  } else if (numberTwo > numberOne) {
    console.log(
      'El número más alto entre ' +
        numberOne +
        ' y ' +
        numberTwo +
        ' es: ' +
        numberTwo
    )
  } else {
    console.log('Los números son iguales')
  }
}
greaterNumber(6, 9)
