function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:

  if( typeof num !== "number") {
    return "No es, un tipo de dato valido, solo NUMEROS."
  }

  if(num < 0) {
    return "Es negativo"
  }

  else if(num > 0) {
    return "Es positivo"
  }

  else {
    return false
  }

}

  console.log(esPositivo(0))
  console.log(esPositivo(0.22))
  console.log(esPositivo(-0.33))
  console.log(esPositivo("dos"))

module.exports = esPositivo;