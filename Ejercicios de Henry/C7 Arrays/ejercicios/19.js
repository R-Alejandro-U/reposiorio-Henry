function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  const arg = Array.from(arguments)
  
  if (arg.length === 0){
    return 0;
  };

  var multi = arg.reduce((numero, producto) => numero * producto, 1);
  return multi;

}

console.log(multiplicarArgumentos(2, 3, 4, 5)); // 120
module.exports = multiplicarArgumentos;
