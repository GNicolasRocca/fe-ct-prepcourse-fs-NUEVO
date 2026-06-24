function combinarNombres(nombre, apellido) {
  // La función recibe dos argumentos llamados "nombre" y "apellido" los cuales son string.
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Por ejemplo: 
  // "Soy", "Henry" ---> "Soy Henry"
  // Tu código:
  var espacio = " ";

  if(typeof(nombre, apellido) === "string"){
    return nombre + espacio + apellido;
  }
}

combinarNombres("Gonzalo", "Rocca")

module.exports = combinarNombres;
