// Code JS

var variable1 = 5
// var variable1 = 4

console.log('variable1 :>> ', variable1); // 5

if ( true ) {  
  console.log('variable1 :>> ', variable1); // 5
  var variable1 = 12
  console.log('variable1 :>> ', variable1); // 12
}

console.log('variable1 :>> ', variable1); // 12

console.error("-");

let variable2 = 5
// let variable2 = 4

console.log('variable2 :>> ', variable2); // 5

if ( true ) {
  // console.log('variable2 :>> ', variable2); // erreur -> 

  let variable2 = 12
  console.log('variable2 :>> ', variable2); // 12 OK

}

console.log('variable2 :>> ', variable2); // 5


console.error("-");

const variable3 = 5

console.log('variable3 :>> ', variable3); // 5

if ( true ) {
  // console.log('variable3 :>> ', variable3); // 5
  const variable3 = 12
  console.log('variable3 :>> ', variable3); // 12
}

console.log('variable3 :>> ', variable3); // 5