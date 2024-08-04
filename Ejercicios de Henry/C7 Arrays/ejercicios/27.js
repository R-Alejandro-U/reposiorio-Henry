function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let palabra_separada = palabras.join(" ")
  return palabra_separada;
}

console.log(dePalabrasAFrase(["hello", "world!"]));
module.exports = dePalabrasAFrase;
