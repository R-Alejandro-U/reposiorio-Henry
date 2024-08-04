function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, 
  // debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:

  let conten = [];
  let iteraciones = 0;

  while(iteraciones < 10){

    console.log(`esta es la suma ${num} y esta es la cantidad de iteraciones ${iteraciones}.`)

    if(num === iteraciones){
      return "Se interrumpió la ejecución"
    };
    
    num += 2;
    iteraciones++
    conten.push(num)
    
  }

  return conten;

}

console.log(breakStatement(-2))
module.exports = breakStatement;
