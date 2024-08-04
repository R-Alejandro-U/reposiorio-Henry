function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  let conten = [];
  let iteraciones = 0;

  while(iteraciones < 10){

    iteraciones++

    if (iteraciones === 5){
      console.log("aca continua");
      continue;
    };
    console.log(`esta es la suma ${num} y esta es la cantidad de iteraciones ${iteraciones}.`)
    num += 2;
    conten.push(num)

  }

  return conten;

}

console.log(continueStatement(0))

module.exports = continueStatement;
