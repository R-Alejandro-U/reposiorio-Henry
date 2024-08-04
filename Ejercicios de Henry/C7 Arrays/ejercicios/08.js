function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
                //El método indexOf() retorna el primer índice en el que se puede encontrar 
                //un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
   return array.indexOf(num);
}

console.log(encontrarElemento(2, [1, 3, 4, 5, 9]))

module.exports = encontrarElemento;
