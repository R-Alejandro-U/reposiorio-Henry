function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  //VOLVER HACER.


  array.sort(function(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      // Comparación numérica
      return a - b;
    } else if (typeof a === "string" && typeof b === "string") {
      // Comparación alfabética
      return a.localeCompare(b);
    } else {
      return false;
    }
  });

  return array
}

console.log(ordenarArray([6, 8, 7, 5]));

module.exports = ordenarArray;
