function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var i = 0;
  var list_x2 = [];
  
  while(i <= array.length - 1){
    list_x2.push(array[i] * 2);
    i = i + 1;
  }

  return list_x2;
}

module.exports = duplicarElementos;
