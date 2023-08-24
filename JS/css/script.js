const title1 = document.getElementById('title1')
const title2 = document.getElementById('title2')
const desc1 = document.getElementById('desc1')
const desc2 = document.getElementById('desc2')

title1.style.color = 'red'
title1.style.backgroundColor = 'black'
title1.style.fontSize = '33px'

console.log(title2.style.color); // output : ""
console.log(getComputedStyle(title2).color); // output : "rgb(255, 0, 0)"