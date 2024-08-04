function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  if(typeof numero !== "number" || numero < 2){
    return false;
  };

  if(numero === 2){
    return true;
  };

  for(var i = 2; i <= Math.sqrt(numero); i++){
    if(numero % i === 0){
      return false;
    };

  };

  return true;

}

console.log(esNumeroPrimo(3));  // Debe retornar true (3 es primo)
console.log(esNumeroPrimo(4));  // Debe retornar false (4 no es primo)
console.log(esNumeroPrimo(17)); // Debe retornar true (17 es primo)
console.log(esNumeroPrimo(1));  // Debe retornar false (1 no es primo)
console.log(esNumeroPrimo(2));  // Debe retornar true (2 es primo)

module.exports = esNumeroPrimo;

