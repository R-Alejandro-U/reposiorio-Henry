function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var M = array.map (elemento => {
    return elemento.toUpperCase();
  })
  return M;
}

module.exports = convertirStringAMayusculas;
console.log(convertirStringAMayusculas(["hola", "mundo", "javascript", "es", "genial"])); // ["HOLA", "MUNDO", "JAVASCRIPT", "ES", "GENIAL"]