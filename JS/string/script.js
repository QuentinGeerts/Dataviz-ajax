let str1 = 'Hello world'
let str2 = "Hello world"
let str3 = `Hello world`

console.log(`En anglais : ${str1}`)

let firstname = "Quentin"
let lastname = "Geerts"
let age = 25

console.log(`${firstname} ${lastname} à ${age} ans`)
console.log(firstname + " " + lastname + " à " + age + " ans")

console.log('C\'est noël !')
console.log("C'est noël !")
console.log(`C'est noël !`)

// Déconseillé
let myStr = new String("Hello world")
console.log(myStr.toString());

// Méthodes

// Récupérer le caractère d'une chaine à la position donnée
console.log(str1.charAt(4)) // output : "o"
console.log(str1.charAt(str1.length-1)); // output : "d"

// Récupérer l'index d'une première occurrence trouvée dans la chaine
console.log(str1.indexOf("o")) // output : 4
console.log(str1.indexOf("o", 5)) // output : 7
console.log(str1.lastIndexOf("o")) // output : 7


// Remplace la première occurence trouvée par la chaine de caractères souhaitées
console.log(str1.replace('world', 'you'))
console.log(str1.replace(/world/, 'you')) // RegEx

// Découpérer une chaine de caractères sur base d'un caractère en tableau
// console.log(str1.split(""));
// console.log(str1.split(" "));
console.log(str1.split("", 5));


console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
// Hello world => dlrow olleH

console.log(str1.split("").reverse().join(""));
console.log(firstname.split("").reverse().join(""));

