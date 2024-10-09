/*
  Importante:
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas.
  No comentar la funcion
*/
function buscarFamiliar(familiares, nombre) {
  // La funcion llamada 'buscarFamiliar' recibe como argumento un array llamado 'familiares' que contiene
  // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
  // recibe un string llamado 'nombre'.
  // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
  // Si no encuentra un objeto que coincida con el string, devolver "No se encontro un familiar con ese nombre".
  // Ej:
  //  var familiares = [{ nombre: 'Pedro', edad: 45 } , { nombre: 'Ema', edad: 25 }];
  //  buscarFamiliar(familiares, 'Pedro') debe devolver { nombre: 'Pedro', edad: 45 };

  // Tu código aca:
  if(familiares.length === 0){
    return "No hay ningun familiar";
  };

  for(let usuario of familiares){
    if(usuario.nombre === nombre){
      return usuario;
    };
  };

  return "No se encontro un familiar con ese nombre";
  
  //for(let i = 0; i < familiares.length; i++){
  //  if(familiares[i].nombre === nombre){
  //    return familiares[i];
  //  };
  //};
  //return "No se encontro un familiar con ese nombre";

  //let resultado = familiares.find(usuario => usuario.nombre === nombre);
  //return resultado ? resultado : "No se encontro un familiar con ese nombre";
}

// No modifiques nada debajo de esta linea //

module.exports = buscarFamiliar
