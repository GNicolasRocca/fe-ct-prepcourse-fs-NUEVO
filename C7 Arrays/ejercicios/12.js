function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let list_mayus = [];
  var i = 0;


  while(i <= array.length -1){
    var list_upper = array[i].toUpperCase()
    console.log(list_upper)
    list_mayus.push(list_upper);
    i = i + 1;
  }
  return list_mayus;
}

convertirStringAMayusculas(['hola', 'buenos', 'dias']);

module.exports = convertirStringAMayusculas;
