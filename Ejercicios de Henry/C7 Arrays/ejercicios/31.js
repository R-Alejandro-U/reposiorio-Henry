function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  // let conten = [];
  // let separada = texto.split("");
  // console.log(separada);
  // for (var i = 0; i < texto.length; i++){
  //   conten.push(separada[separada.length - 1 - i]);
  // };

  // var arreglada = conten.join("")

  // return arreglada;

  return texto.split("").reverse().join("");
}

console.log(invertirTexto("Hola"));

module.exports = invertirTexto;
