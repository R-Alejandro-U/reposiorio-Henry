function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  var conten = 0;
  for (var i = 0; i < numeros.length; i++){
    
    if(numeros[i] % 2 !== 0){
      continue
    }

    conten++

  }

  return conten;

}

console.log(contarParesConContinue([2, 3, 4, 5, 6, 9, 40]));
module.exports = contarParesConContinue;
