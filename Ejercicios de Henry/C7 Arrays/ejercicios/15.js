function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  if(array.length === 0){
    return 0;
  };

  var numMax = Math.max(...array);
  return array.indexOf(numMax)
 
}

console.log(encontrarIndiceMayor([2,4,6]));

module.exports = encontrarIndiceMayor;
