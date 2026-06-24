function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var acum = a;
  
  for(a; a <= b; a++){
    acum = acum * a;
    console.log(acum);
  }
  return acum;
}


productoEntreNúmeros(1, 10);

module.exports = productoEntreNúmeros;