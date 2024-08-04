function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   let final = array.length - 1;
   let random = Math.floor(Math.random() * (final + 1));
   return array[random];

}

console.log(obtenerElementoAleatorio(["1", "2", "3", "4", "5", "6"]));

module.exports = obtenerElementoAleatorio;
