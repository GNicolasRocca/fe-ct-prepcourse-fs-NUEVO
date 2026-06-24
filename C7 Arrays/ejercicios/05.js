function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  
  array.unshift(elemento);

  return array;
}

agregarItemAlComienzoDelArray(['1', '2'], '3');

module.exports = agregarItemAlComienzoDelArray;
