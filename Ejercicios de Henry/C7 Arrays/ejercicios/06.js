function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  "(con for)"

  //var contenedor = [];
  //for (var i = 0; i < array.length; i++){
   // contenedor.push(array[array.length - 1 - i]);
 // }
  //return contenedor;

  "(con while)"

  //var inicio = 0;
  //var fin = array.length - 1;
  //var tem = undefined;

  //while (inicio < fin) {
  //  tem = array[inicio];
  //  array[inicio] = array[fin];
  //  array[fin] = tem;
  //  inicio++
  //  fin--
  //}
  //return array;

  
  return array.reverse();
}


console.log(invertirArray(["1", "2", "3", "4", "5", "6"]));

module.exports = invertirArray;
