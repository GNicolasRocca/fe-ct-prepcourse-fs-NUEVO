function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  array.push(elemento);
  
  return array;
}

agregarItemAlFinalDelArray(['hola', 'buenas'], 'tardes');

module.exports = agregarItemAlFinalDelArray;
