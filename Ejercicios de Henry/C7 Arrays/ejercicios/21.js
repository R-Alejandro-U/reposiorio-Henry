function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  
  const buscar = ["Marzo", "Noviembre","Enero" ]
  let meses = [];

  for (mes of buscar){
    if(array.includes(mes)){
      meses.push(mes);
    };
  };


  if (meses.length === buscar.length){
    return meses;
  }

  else {
    return "No se encontraron los meses pedidos"
  };

}

console.log(mesesDelAño(["Enero", "Marzo", "Diciembre", "Junio", "Agosto", "Febrero", "Noviembre", "Abril", "Julio", "Septiembre", "Mayo", "Octubre"]))
module.exports = mesesDelAño;
