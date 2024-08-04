function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:

                                  // El numero de caracteres admitidos.
  if (typeof letra !== "string" || letra.length !== 1) {
    return "Dato incorrecto"
  }

  // Hace que las mayusculas sean minusculas, es mas fecil analizarlas así.
  letra = letra.toLowerCase();

  // Verifica si es una vocal. //incluides para incluir otra regla ya escrita.
  if (["a", "e", "i", "o", "u"].includes(letra)) {
    return "Es vocal"
  }

  else {
    return "Dato incorrecto"
  }

}


module.exports = esVocal;
