function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  var sumas = arrayOfNums.reduce((num1, suma) => num1 + suma, 0);
  return sumas;
}

console.log(agregarNumeros([2, 3, 4, 5, 6, 9, 40]));
module.exports = agregarNumeros;
