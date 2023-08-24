let value = prompt("Entrez une valeur : ")

// Tester
try {
  // test
  if (value == "") throw "La valeur entrée est vide"
  if (isNaN(value)) throw "La valeur n'est pas un nombre"

  console.log("Valeur ok");
} 
// Le test échoue => attraper l'erreur
catch (error) {
  console.log(error);
}
// Dans tous les cas
finally {
  console.log("Je passe dans tous les cas");
}