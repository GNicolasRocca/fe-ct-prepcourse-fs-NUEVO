function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  cont = 0;
  var x = 1;

  for(let i = 0; i <= array.length - 1; i++){
    if(array[i] == array[x]){
     cont = cont + 1;
    }
    x = x + 1;
    if(cont == array.length -1) return true;
  }
  return false;
}

todosIguales(['10', '10', '10']);

module.exports = todosIguales;
