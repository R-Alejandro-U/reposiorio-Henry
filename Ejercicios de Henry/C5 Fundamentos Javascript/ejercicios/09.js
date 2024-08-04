function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:

  if(valor === null || valor === undefined) {
    // Para usar | es 124 y hola alejandro del futuro :)
    return true;
  }

  
 

  else {
    return false;
  }

}

console.log(esNuloOIndefinido(23));
console.log(esNuloOIndefinido("dgsg"));
console.log(esNuloOIndefinido(null));
console.log(esNuloOIndefinido());
console.log(esNuloOIndefinido({}));
console.log(esNuloOIndefinido([5,3,2]));

module.exports = esNuloOIndefinido;