const today = new Date()
console.log(today)

const timestampToday = today.getTime()

const date2 = new Date(timestampToday)
console.log(timestampToday);
console.log(date2);

const date3 = new Date('2022-01-04T00:00:00')
console.log(date3);

const date4 = new Date(2022, 0)
console.log(date4);
const date5 = new Date(2022, 0, 25)
console.log(date5);
const date6 = new Date(2022, 0, 25, 15)
console.log(date6);
const date7 = new Date(2022, 0, 25, 15, 36)
console.log(date7);
const date8 = new Date(2022, 0, 25, 15, 36, 23)
console.log(date8);
const date9 = new Date(2022, 0, 25, 15, 36, 23, 565)
console.log(date9);
 
// --- GETTERS --- => Récupération des valeurs

// Année
console.log(today.getFullYear());

// 0 => janvier => 11 => décembre
console.log(today.getMonth()); 

// Jour du mois
console.log(today.getDate()); 

// Jour de la semaine => 0 => dimanche => 6 => samedi
console.log(today.getDay());

// Heure
console.log(today.getHours());

// Minutes
console.log(today.getMinutes());

// Secondes
console.log(today.getSeconds());

// Milliseconds
console.log(today.getMilliseconds());
 
// --- SETTERS --- => Modification des valeurs

// Année
today.setFullYear(2020)

// 0 => janvier => 11 => décembre
today.setMonth(1) 

// Jour du mois
today.setDate(1)

// Heure
today.setHours(1)

// Minutes
today.setMinutes(1)

// Secondes
today.setSeconds(1)

// Milliseconds
today.setMilliseconds(1)

console.log(today);