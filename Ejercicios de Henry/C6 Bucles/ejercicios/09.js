function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:

  if (typeof status !=="number") {
    return "No es valido, porfavor ingrese un numero.";
  }

  switch (status) {
    case 1:
    return "Online";
    

    case 2:
    return "Away";
    
    
    default:
    return "Offline"
  } 

}

console.log(conection(1))

module.exports = conection;
