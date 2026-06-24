function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   
   var list_random = Math.random(1, array.lenght);
  
   console.log(list_random)
   var list_random_2 = Math.floor(list_random)
  
   
   return array[list_random_2];
}

obtenerElementoAleatorio(['1', '2', '3', '4', '5']);

module.exports = obtenerElementoAleatorio;
