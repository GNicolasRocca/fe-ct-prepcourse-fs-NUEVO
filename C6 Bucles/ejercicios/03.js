function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if((Number.isInteger(x && y)) && x > y){
    return x;
  }
  else if((Number.isInteger(x && y)) && y > x){
    return y;
  }
  else if((Number.isInteger(x && y)) && x === y){
    return x;
  }
  else{
    return "Ponga un dato valido";
  }
}

obtenerMayor(12, 11);

module.exports = obtenerMayor;
