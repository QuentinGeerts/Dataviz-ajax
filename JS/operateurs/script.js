console.log(1 == "1") // output : true
console.log(1 === "1") // output : false
console.log(1 != "1") // output : false
console.log(1 !== "1") // output : true

let age = 17

// (condition ? valeur_si_vrai : valeur_si_faux )
let str = age >= 18 ? "Adulte" : "Enfant"


let str2 = ""

if (age >= 18) {
  str = "Adulte"
}
else {
  str = "Enfant"
}

if (age >= 18) str = "Adulte"
else str = "Enfant"

console.log(str);

let count = 4

console.log(`J'ai ${count} pomme${(count > 1 ? 's': '')}`);


/// ----------------

const obj = {
  name: 'Geerts',
  firstname: 'Quentin',
  birthdate: new Date()
}

console.log(obj);



console.log(delete obj.name);

console.log(obj);
console.log(obj.name);


// -------

const form = document.forms[0]

form.onsubmit = function () {
  console.log("Formulaire soumit");
}


let c = 1

console.log(c++, c); // 1 2 => 1 2
console.log(++c, c); // 3 3 => 3 3
