const btn = document.getElementById('btn')
const ul = document.querySelector('ul')
const inputText = document.getElementById('inputText')
const error = document.getElementById('error')

btn.onclick = () => {
  if (inputText.value.length > 0) {
    const li = document.createElement('li')
    li.innerText = inputText.value
    ul.appendChild(li)
    error.innerText = ''
  }
  else {
    error.style.display = "block"
    error.innerText = 'Le champ doit être complété.'
    setTimeout(() => {
      error.style.display = "none"
    }, 1500)
  }

  // Permet de vider le champ
  inputText.value = ''

  // Permet de rendre le focus sur l'input après validation
  inputText.focus()
}

