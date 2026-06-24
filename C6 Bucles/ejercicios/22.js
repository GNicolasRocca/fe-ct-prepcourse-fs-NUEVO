function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var acum = 0;

  do{
    num = num + 5;
    acum = acum + 1;
    console.log(acum);
  } while(acum < 8);
  
  return num;
}

doWhile(5);

module.exports = doWhile;