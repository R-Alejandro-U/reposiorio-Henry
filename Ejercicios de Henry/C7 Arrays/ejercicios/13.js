function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  "(Metodo con forEach)"

 // var numeros = [];
 //array.forEach(num => {
 //   if(num % 2 === 0){
 //     console.log(num)
 //     numeros.push(num);
 //   };
 // });

 // console.log(numeros)
 // //return numeros;

 "(Metodo con filter)"
//es mejor para filtrar cosas en especificas, que forEach, y menos codigo.
 return array.filter(num => num % 2 === 0);

}

console.log(filtrarNumerosPares([2, 3, 4, 5, 6, 9, 12]));
module.exports = filtrarNumerosPares;
