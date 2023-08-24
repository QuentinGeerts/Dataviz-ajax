// Création d'un tableau à la volée : petite préférence
const array = [
  12, 
  "a", 
  function () { console.log("Anonymous function"); }, 
  () => { console.log("Arrow function"); }, 
  { name: 'Geerts', firstname: 'Quentin' }, 
  new Date(), 
  true
]

const array5 = ["Hello"]

const array2 = new Array() // Tableau vide
const array3 = new Array(5) // Tableau avec une taille de 5
const array4 = new Array(5, 7, "a") // initialiser un nouveau tableau avec plusieurs valeurs

console.log('array :>> ', array);

console.log(array.length);

// Ajouter un élément au tableau (à la fin)
array5.push(12)
console.log('array5 :>> ', array5);

// Retirer un élément au tableau (à la fin)
// array5.pop()
// console.log('array5 :>> ', array5);

// Ajouter un élément au tableau (au début)
array5.unshift(true)
console.log(array5);

// Retirer un élément au tableau (au début)
// array5.shift(12)
// console.log(array5);

// Supprimer une ou plusieurs valeurs
// console.log("Valeurs supprimées : ", array5.splice(1))
// console.log("Valeurs supprimées : ", array5.splice(1, 1))
// console.log(array5);


// splice( position de départ, le nombre d'éléments à supprimer, la liste des éléments à ajouter )
// Ajouter une ou valeur n'importe où dans le tableau
console.log("Valeurs supprimées : ", array5.splice(1, 0, 99, "Bonjour", false))
console.log(array5);

// Attention vous travaillez avec des pointeurs
// const array6 = array5
// console.log('array6 :>> ', array6);
// array6.sort()
// console.log('array5 :>> ', array5);

// Copie un tableau sans pouvoir modifier le premier
// param "end" => indice exclus
// const array6 = array5.slice(1, 5)
// console.log('array6 :>> ', array6);
// const array6 = array5.slice()
// array6.sort()
// console.log('array6 :>> ', array6);
// console.log('array5 :>> ', array5);


// Transformer mon tableau en string (éléments séparés par une virgule)
console.log(array5.toString());

// Transformer mon tableau en string (éléments séparés par un séparateur choisi)
console.log(array5.join(" "));

const ints = [8, 1, 6, 3, 4, 5, 1, 9, 10]

// On va parcourir chaque et y faire quelque chose
// Mettre les nombres sur 20
const on20 = ints.map(x => x * 2)

console.log(on20);


// Réduire un tableau à une seule valeur
const avg = on20.reduce((acc, currentValue) => acc + currentValue) / on20.length

console.log(avg);

// trier un tableau (alphabétiquement)
console.log(ints);
// ints.sort()
// console.log(ints); // output: [1, 1, 10, 3, 4, 5, 6, 8, 9]

// trier un tableau (croissant)

ints.unshift("z", "f")
ints.push("s", "p")

ints.sort((a, b) => a - b)
console.log(ints);
ints.sort((a, b) => b - a)
console.log(ints);

