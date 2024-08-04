function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  if (x >= y) {
    return x;
  }

  else {
    return y
  };

}

console.log(obtenerMayor(-7, -4));
console.log(obtenerMayor(3, -6));
console.log(obtenerMayor(5, 5));


module.exports = obtenerMayor;
