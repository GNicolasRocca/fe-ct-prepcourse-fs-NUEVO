function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  list_mult_index = [];

  for(let i = 0; i <= array.length - 1; i++){
    list_mult_index.push(array[i] * i);
  }

  return list_mult_index;
}

multiplicarElementosPorIndice(['2', '4', '6', '8']);

module.exports = multiplicarElementosPorIndice;
