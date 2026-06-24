function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  if(num < 50 && num > 20){
    return true;
  }
  else{
    return false;
  }
}

estaEnRango(21);

module.exports = estaEnRango;
