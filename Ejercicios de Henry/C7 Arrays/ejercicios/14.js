function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  let contador = 0;
  array.forEach(element => {
    if(element > 10){
      contador++
    }
  });

  return contador;

}

console.log(contarElementosMayoresA10([2, 3, 4, 5, 6, 9, 40]));

module.exports = contarElementosMayoresA10;
