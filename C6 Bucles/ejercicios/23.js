function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  var acum_div = 0;

  for(var i = 1; i <= 100; i++){
    if(numero % i === 0){
      acum_div = acum_div + 1;
    }
    else if(acum_div > 2){
      return false;
    }
  }

  return true;
}

esNumeroPrimo(4);

module.exports = esNumeroPrimo;
