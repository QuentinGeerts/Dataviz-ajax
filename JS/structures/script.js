let value = 4.5


switch ( value ) {

  case 1:
  case 2:
  case 3:
    console.log("La valeur vaut de 1 à 3");
    break
  
  case 4:
  case 5:
  case 6:
    console.log("La valeur vaut de 4 à 6");
    break
  
  case 7:
  case 8:
  case 9:
    console.log("La valeur vaut de 7 à 9  ");
    break

  default:
    console.log("La valeur n'est pas reprise");

}

// --- FOR IN 
const array = [7, 1, 8, 5, 6]
const obj = { name: 'Geerts', firstname: 'Quentin' }
const obj2 = [
  { name: 'Geerts', firstname: 'Quentin' },
  { name: 'Zigrossi', firstname: 'Adrien' },
  { name: 'Abdi Hassan', firstname: 'Asma' },
  { name: 'Vincart', firstname: 'Stéphanie' },
]
const str = "Hello world"

for (const key in str) {
  console.log(`array[${key}] :>> `, str[key]);
}

for (const value of obj2) {
  console.log('value.name :>> ', value.name);
  console.log('value.firstname :>> ', value.firstname);
}

// ------

// Break => Sortir de la structure
console.warn("BREAK");

let cpt = 0  

while (cpt < 10) {

  if (cpt == 4) break

  console.log("Itération ", cpt)

  cpt ++

}

// Continue => Sortir de l'itération en cours
console.warn("CONTINUE");


for (let i = 0; i < 10; i++) {

  if (i == 4) continue
  
  console.log("Itération ", i)
  
}

// --- Exo 

const days =  ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]

console.log(`Nous sommes ${days[new Date().getDay()]}`);


// -- Exo 

let nbRows = prompt("Entrez le nom de lignes désirées :")
let stars = ""


for (let i = 0; i < nbRows; i++) {
  for (let j = 0; j <= i; j++) {
    stars += "*"
  }  
  stars += "\n"
}

console.log(stars);