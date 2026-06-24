function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  // Potencia de 2 resultado de multiplicar 2 por si mismo
  var i = 0;

  while(i <= 100){
    i = i + 1;
    if(2 ** i === numero){
      return true;
    }
  }
  return false;
}

esPotenciaDeDos(2);

module.exports = esPotenciaDeDos;
