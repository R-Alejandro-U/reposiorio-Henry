function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  var igual = string.split("").reverse().join("");
  var original = string;

  if(igual === original){
    return true;
  }

  else {
    return false;
  };
}

console.log(esPalindromo("radar"));
console.log(esPalindromo("anilina"));

module.exports = esPalindromo;