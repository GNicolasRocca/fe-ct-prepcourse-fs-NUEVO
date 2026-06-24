// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearHaciaArriba(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes redondear "num" hacia arriba y retórnalo.
  // Por ejemplo: 
  // 2.5 ---> 3
  // 0.1 ---> 1
  // Tu código:
  var redondear_arriba = Math.ceil(num);

  if(typeof(num) === "number"){
    return redondear_arriba;
  }
}

redondearHaciaArriba(1,3);

module.exports = redondearHaciaArriba;