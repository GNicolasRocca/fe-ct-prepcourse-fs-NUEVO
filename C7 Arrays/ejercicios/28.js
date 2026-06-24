function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if(Array.isArray(arr) === true){
    console.log("Es un array");
    if(arr.length > 0){
      return true;
    } 
    else{
      console.log("Pero no tiene elementos")
      return false;
    }
  }
  return false;
}

esArrayNoVacio(['1']);

module.exports = esArrayNoVacio;