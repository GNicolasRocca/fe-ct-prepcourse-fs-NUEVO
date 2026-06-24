function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  list_pares = []

  for(let i = 0; i <= array.length - 1; i++){
    if(array[i] % 2 === 0){
      list_pares.push(array[i]);
    }
  }

  return list_pares;
}

filtrarNumerosPares(['10', '11', '12', '9']);

module.exports = filtrarNumerosPares;
