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
  var vocal = "Es vocal";
  var incorrecto = "Es incorrecto";

  if((typeof(letra)) === "string" && letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    return vocal;
  }
  else{
    return incorrecto;
  }
}

esVocal("e");

module.exports = esVocal;
