// const obj = navigator

// for (const props in obj) {
//   const value = obj[props]
//   document.getElementById('info').innerHTML += `${props} : ${value} <br>`
// }



const info = document.getElementById('info')
console.log('info :>> ', info);

info.onmouseover = function () {
  // this.style.fontSize = "20px"
}

info.onmouseout = function () {
  // this.style.fontSize = "12px"
}

const divs = document.getElementsByTagName('div')
console.log('divs :>> ', divs);

console.log(divs[0]);
console.log(divs[1]);
console.log(divs["info"]);
console.log(divs.info);
// console.log(divs.0); // Pas possible

// const divs2 = document.getElementsByClassName('bg-red')
// Array.from(divs2).forEach(x => x.style.background = "lightgrey")
// console.log(divs2);

// CreateElement

const myDiv = document.createElement('div')
myDiv.innerText = "Texte de ma div personnalisée"
myDiv.onclick = (e) => {
  console.log(e);
}

myDiv.style.color = "blue"
console.log(myDiv);

const script = document.body.lastChild

document.body.insertBefore(myDiv, script)

// console.log(document.body.childNodes);
console.log(document.body.children);

// parentNode

const btn = document.getElementById("btnAjouter")
btn.onclick = ajouter

function ajouter(event) {
  const productRow = event.target.parentNode.parentNode

  console.log('productRow :>> ', productRow.children[1].innerText);
}

// AppendChild

const divInfo = document.createElement('div')
divInfo.setAttribute('id', 'divInfo')
divInfo.classList.add('divInfo')

const titleInfo = document.createElement('h1')
titleInfo.innerText = "Titre Info"
titleInfo.setAttribute('id', 'titleInfo')
titleInfo.classList.add('title')

const descInfo = document.createElement('p')
descInfo.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nulla. Veniam ea, laboriosam recusandae consequuntur possimus nostrum assumenda accusantium asperiores suscipit, nesciunt quis, eligendi dolores explicabo exercitationem maiores fugit alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nulla. Veniam ea, laboriosam recusandae consequuntur possimus nostrum assumenda accusantium asperiores suscipit, nesciunt quis, eligendi dolores explicabo exercitationem maiores fugit alias."
descInfo.setAttribute('id', 'descInfo')
descInfo.classList.add('article')

descInfo.onclick = function () {
  if (this.classList.contains('article'))
  this.classList.remove('article')
  else 
  this.classList.add('article')
}


divInfo.appendChild(titleInfo)
divInfo.appendChild(descInfo)

const wrapper = document.getElementById('wrapper')
wrapper.appendChild(divInfo)


console.log(titleInfo.nextElementSibling);
console.log(titleInfo.previousElementSibling);

const elements = document.querySelectorAll("#wrapper div:nth-child(2n+1)")

console.log(elements);

Array.from(elements).map(element => element.style.backgroundColor = "chartreuse")