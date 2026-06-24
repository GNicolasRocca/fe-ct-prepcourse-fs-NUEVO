function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  list_mayor_a_10 = [];
  cont = 0;


  for(let i = 0; i <= array.length - 1; i++){
    if(array[i] > 10){
      list_mayor_a_10.push(array[i]);
      cont = cont + 1;
    }
  }
  return list_mayor_a_10;
}

contarElementosMayoresA10(['1', '11', '10', '15']);

module.exports = contarElementosMayoresA10;
