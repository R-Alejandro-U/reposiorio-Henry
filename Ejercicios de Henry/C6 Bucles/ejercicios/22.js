function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  var veces = 0;

  do {
    veces++
    num += 5
  }

  while (veces < 8);
  return num;

}

module.exports = doWhile;

console.log(doWhile(1))