function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

  var suma = 0;
  for ( var i = 1; i <= n ; i++){
    suma += i;
  
  }

  return suma;

}

console.log(sumarHastaN(1));  // Debe retornar 1
console.log(sumarHastaN(5));  // Debe retornar 15 (1 + 2 + 3 + 4 + 5)
console.log(sumarHastaN(10)); // Debe retornar 55 (1 + 2 + ... + 10)
console.log(sumarHastaN(0));  // Debe retornar 0

module.exports = sumarHastaN;
