function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:

   var arr = ['buenas', 'tardes'];

   arr.unshift(array);
  
   var arr_2 = arr.indexOf(array);
  
    if(num === arr_2){
         return num;
    }
    else{
         return "-1";
      }
}

encontrarElemento(0, 'hola');

module.exports = encontrarElemento;
