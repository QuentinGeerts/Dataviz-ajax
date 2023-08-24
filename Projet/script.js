/*
  Global variables
*/

// windows + ;
const icons = []
const userCards = []
const NB_TRY = 20
let nbTry = 0, nbFound = 0
let timer = null
let timerValue = 0

/*
  Elements
*/

const startBtn = document.getElementById('start-button')
const wrapper = document.getElementById('wrapper')
const result = document.getElementById('result')
const info = document.getElementById('info')
info.classList.add('hide')

const count = document.getElementById('count')

startBtn.addEventListener('click', init)

const timerspan = document.getElementById('timerspan')

/*
  Fonctions
*/

// Fonction pour commencer la partie
function init() {
  // Permet d'initialiser et de remettre à 0 nos différentes données
  reset()

  // Génération du paquet de cartes
  generateCards()
}

function reset() {
  icons.push('🍣', '🥐', '🍕', '☕', '🍎', '🍟', '🥗', '🍜', '🍰')

  // Compteur
  nbTry = NB_TRY
  info.classList.remove('hide')

  nbFound = 0

  // Timer
  timerValue = 60
  timerspan.innerText = formattedTimerValue(timerValue)
  clearInterval(timer)
  timer =  setInterval(() => {
    timerValue--
    timerspan.innerText = formattedTimerValue(timerValue)
    checkGame()
  }, 1000)

  // Mise à jour du contenu de la page
  wrapper.innerText = ''
  startBtn.innerText = 'Recommencer'
  count.innerText = nbTry
  result.innerHTML = ''

  // Vider un tableau sans le réaffecter (impossible avec const)
  userCards.splice(0, userCards.length)
}

// Générer une carte avec son doublon
function generateCards() {

  const length = icons.length

  for (let i = 0; i < length; i++) {
    // Génération des cartes
    const card = createCard()
    const card2 = card.cloneNode(true)

    card.onclick = selectCard
    card2.onclick = selectCard

    // Ajout des cartes dans le wrapper de manière aléatoire sur les enfants du wrapper
    wrapper.insertBefore(card, wrapper.children[Math.floor(Math.random() * wrapper.children.length)])
    wrapper.insertBefore(card2, wrapper.children[Math.floor(Math.random() * wrapper.children.length)])
  }
}

function createCard() {
  const card = document.createElement('div')
  card.classList.add('card')

  const cardValue = document.createElement('p')
  // Math.random() 0 et 1 (exclus)
  let index = Math.floor(Math.random() * icons.length)
  cardValue.innerText = icons.splice(index, 1)
  cardValue.classList.add('hide')

  card.appendChild(cardValue)

  return card
}

function selectCard() {

  // La carte selectionné n'est pas déjà la carte qui a été selectionnée
  if (userCards[0] == this) return

  // On peut ajouter une carte si il y en a moins de 2 dans le paquet
  if (userCards.length >= 2) return

  // Ajout de la carte dans la main
  userCards.push(this)

  // Ajouter un style pour montrer qu'on a selectionné la carte
  this.classList.add('selected-card')

  // Rendre visible l'icone
  this.children[0].classList.remove('hide')

  // Lorsqu'on a selectionné les 2 cartes, on vérifie leur valeur
  if (userCards.length == 2) {

    nbTry--
    count.innerText = nbTry

    // Si les deux cartes sont les mêmes
    if (userCards[0].children[0].innerText == userCards[1].children[0].innerText) {
      console.log("OK");

      nbFound++

      setTimeout(() => {

        userCards[0].classList.remove('selected-card')
        userCards[1].classList.remove('selected-card')

        userCards[0].classList.add('selected-card-valid')
        userCards[1].classList.add('selected-card-valid')

        userCards[0].onclick = null
        userCards[1].onclick = null

        userCards.splice(0, 2)
        checkGame()
      }, 500)

    }

    // Dans le cas où elles ne sont pas les mêmes
    else {

      userCards.map(card => {
        card.classList.remove('selected-card')
        card.classList.add('selected-card-invalid')
      })

      setTimeout(() => {

        userCards[0].classList.remove('selected-card-invalid')
        userCards[1].classList.remove('selected-card-invalid')

        userCards[0].children[0].classList.add('hide')
        userCards[1].children[0].classList.add('hide')

        userCards.splice(0, 2)
        checkGame()
      }, 1000)

    }
  }

}

function checkGame() {
  if (nbFound == (wrapper.children.length / 2)) {
    console.log("Partie gagnée");

    result.innerHTML = `<h2>Partie gagnée!</h2><p>En ${NB_TRY - nbTry} essais</p>`
    clearInterval(timer)
    
  }
  
  if (nbTry == 0 && nbFound != (wrapper.children.length / 2) || timerValue == 0) {
    result.innerHTML = `<h2>Partie perdue!</h2>`
    
    // Transformer un élément en tableau (qui se est similaire à un array mais n'en est pas un)
    Array.from(wrapper.children).map(card => {
      card.children[0].classList.remove('hide')
      card.onclick = null
    })

    clearInterval(timer)
  }


}

function formattedTimerValue (time) {

  let hours = Math.floor(time / 3600)
  let minutes = Math.floor(time % 3600 / 60)
  let seconds = Math.floor(time % 3600 % 60)

  if (hours < 10) hours = "0" + hours
  if (minutes < 10) minutes = "0" + minutes
  if (seconds < 10) seconds = "0" + seconds

  return `${hours}:${minutes}:${seconds}`
}