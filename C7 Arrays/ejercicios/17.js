function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var suma_total = 0;

  for(let i = 0; i <= arrayOfNums.length - 1; i++){
    suma_total = suma_total + Math.floor(arrayOfNums[i]);
  }
  return suma_total
}

agregarNumeros(['2', '20', '3']);

module.exports = agregarNumeros;
