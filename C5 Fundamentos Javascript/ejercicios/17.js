function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  var pos = "Positivo";
  var neg = "Negativo";


  if(Number.isInteger(num) && num > 0){
    return pos;
  }
  else if(Number.isInteger(num) && num < 0){
    return neg;
  }
}

esPositivo(-1);

module.exports = esPositivo;