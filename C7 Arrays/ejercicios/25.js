function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var cont = 0;

  for(let i = 0; i <= numeros.length - 1; i++){
    if(numeros[i] % 2 !== 0) continue;
    if(numeros[i] % 2 === 0){
      cont = cont + 1;
    }
  }

  return "La cantidad de numeros pares es: " + cont;
}

contarParesConContinue(['10', '12', '11', '4']);

module.exports = contarParesConContinue;
