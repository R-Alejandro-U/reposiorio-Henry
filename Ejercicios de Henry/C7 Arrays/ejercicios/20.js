function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  if(array.length === 0){
    return true;
  };

  const primer = array[0];
  for(var i = 0; i < array.length; i++){
    if(array[i] !== primer){
      return false;
    };
  };

  return true;

}

console.log(todosIguales([1, 1, 1, 1, 1, 1]))

module.exports = todosIguales;
