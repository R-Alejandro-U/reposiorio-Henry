function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  if(resultadosTest.length === 0) {
    return 0;
  };

  var sumas = resultadosTest.reduce((num1, suma) => num1 + suma, 0);
  return sumas / resultadosTest.length;

}

console.log(promedioResultadosTest([2, 3, 4, 5, 6, 9, 40]));
module.exports = promedioResultadosTest;
