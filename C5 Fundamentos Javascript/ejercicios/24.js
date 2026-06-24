function agregarSimboloExclamacion(str) {
  // La función recibe un argumento llamado str el cual es un string.
  // Agrega un símbolo de exclamación al final del string str y retórnalo.
  // Por ejemplo: 
  // "hello world" ---> "hello world!"
  // Tu código:
  var signo_exclamacion = "!";

  if(typeof(str) === "string"){
    return str + signo_exclamacion;
  }
  else{
    return null;
  }
}

agregarSimboloExclamacion("Buenas");

module.exports = agregarSimboloExclamacion;
