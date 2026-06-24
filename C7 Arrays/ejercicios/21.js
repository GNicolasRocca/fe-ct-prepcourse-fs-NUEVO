function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const en_mar_nov = [];
  var cont = 0;

  for(let i = 0; i <= array.length - 1; i++){
    if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
      en_mar_nov.push(array[i]);
      cont = cont + 1; 
    }
    if(cont === 3) return en_mar_nov;
  }
  return "No se encontraron los meses perdidos";
}

mesesDelAño(['Enero', 'Junio', 'Julio', 'Marzo', 'Noviembre']);

module.exports = mesesDelAño;
