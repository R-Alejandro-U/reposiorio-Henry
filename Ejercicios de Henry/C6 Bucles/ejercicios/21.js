function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  if (typeof numero !== "number" || numero < 1){
    return false;
  };

  //es un caso espcial.
  if (numero === 1){
    return true
  };

  while(numero > 1){

    if(numero % 2 !== 0){
      return false;
    };

   numero /= 2;
  }

  return true;

}
console.log(esPotenciaDeDos(1));  // true
console.log(esPotenciaDeDos(2));  // true
console.log(esPotenciaDeDos(3));  // false
console.log(esPotenciaDeDos(4));  // true
console.log(esPotenciaDeDos(16)); // true
console.log(esPotenciaDeDos(18)); // false


module.exports = esPotenciaDeDos;
