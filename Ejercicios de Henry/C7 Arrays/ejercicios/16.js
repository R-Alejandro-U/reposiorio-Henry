function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  
  "(cuando resuelva directo no hace falta condición)"
 return array.map((num, index) => num * index);
}

console.log(multiplicarElementosPorIndice([2, 3, 4, 5, 6, 9, 40]));

module.exports = multiplicarElementosPorIndice;
