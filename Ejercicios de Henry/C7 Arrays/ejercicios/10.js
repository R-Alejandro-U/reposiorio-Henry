function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  
  //array.forEach(element => {
 //   if (typeof array !== "number" && element.length > 5){
  //    console.log(element);
  //  };
  //});

  for (let i = 0; i < array.length ; i++){
    if (array[i].length >= 5){
      return array[i];
    };
  }
  
}

module.exports = obtenerPrimerStringLargo;

console.log(obtenerPrimerStringLargo(["holaaa", "p", "jjjjjj", "oiwhgfowihgvfkiuh"]));