direBonjour()
direBonjourPrenom("Quentin")

console.log(inverser("Quentin"));
console.log(inverser("Hello world"));
console.log(inverser("Bonjour les dataviz"));

function direBonjour() {
  console.log("Bonjour");
}

function direBonjourPrenom(prenom) {
  console.log("Bonjour " + prenom)
}

function inverser(str) {
  return str.split("").reverse().join("")
}

// -------------

// Func Anon... vs Arrow Func 

const btn = document.getElementById('btn')

btn.onclick = function () {
  console.log('fonction anonyme - this :>> ', this);
}

btn.onmouseenter = () => {
  console.log('fonction flechée - this :>> ', this);
}

// --
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);
const map2 = array1.map(function (x) { return x * 2 });

console.log(map1);
// expected output: Array [2, 8, 18, 32]

console.log(map2);
// expected output: Array [2, 8, 18, 32]