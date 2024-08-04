function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if (a === 0 || b === 0 || a < 0 && b > 0){
    return 0;
  };

  var prod = 1;
  for (var i = a ; i <= b ; i++){
    prod *= i;
    console.log(`este es el producto ${prod}, y este es el exponente i ${i}`); 

  };

  return prod;

}

console.log(productoEntreNúmeros(1, 5))

module.exports = productoEntreNúmeros;