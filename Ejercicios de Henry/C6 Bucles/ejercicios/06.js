function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  if (typeof num !== "number") {
    return "No es un número";
  };

  //.toString() Los números no tienen una propiedad length, 
  //por lo tanto esto los convierte en una cadena de texto para poder usar length.
  if(num.toString().length === 3) {
    return true;
  }

  else {
    return false;
  };

}


console.log(tieneTresDigitos(3));
console.log(tieneTresDigitos(33));
console.log(tieneTresDigitos(333));
console.log(tieneTresDigitos("3"));


module.exports = tieneTresDigitos;
