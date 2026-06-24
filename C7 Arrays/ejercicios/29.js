function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  var x = 1;

  for(let i = 0; i <= numeros.length -1; i++){
    if(numero[i] + 1 !== numero[x]){
      return numero[i] + 1;
    }
    else{
      if(arr.length > 0){
        return null;
      } 
    }
    x = x + 1;
  }
}

encontrarNumeroFaltante(['1', '2', '3']);

module.exports = encontrarNumeroFaltante;