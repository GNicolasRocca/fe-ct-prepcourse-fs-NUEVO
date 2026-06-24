function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  cont = 0;

  for(let i = 0; i <= resultadosTest.length - 1; i++){
    cont = cont + Math.floor(resultadosTest[i]);
  }
  return cont / resultadosTest.length;
}

promedioResultadosTest(['10', '10', '7', '7']);

module.exports = promedioResultadosTest;
