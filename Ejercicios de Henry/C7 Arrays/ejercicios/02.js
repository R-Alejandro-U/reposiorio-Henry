function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  let ultimo = array.length - 1;
  return array[ultimo];
}

console.log(devolverUltimoElemento(["1", "2", "3", "4", "5"]))

module.exports = devolverUltimoElemento;
