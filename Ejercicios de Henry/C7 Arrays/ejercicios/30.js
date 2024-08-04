function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  return numeros.find((num, index) => numeros.slice(0, index).includes(num));


}

console.log(encontrarElementoRepetido([1, 2, 3, 4, 9, 5, 6, 7, 8, , 10]));
module.exports = encontrarElementoRepetido;