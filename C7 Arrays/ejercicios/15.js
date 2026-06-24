function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  el_mas_grande = Math.max(...array);
  
  var x = array.indexOf(Math.max(...array));

  return(Math.abs(x));
}

encontrarIndiceMayor(['10', '150', '50', '80']);

module.exports = encontrarIndiceMayor;
