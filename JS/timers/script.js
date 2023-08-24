// Timer => d'exécuter une fonction de callback après un délai

let timeOutTime = 0
let timerTimeOut = null

let intervalTime = 0
let timerInterval = null

const btnLancerTimeOut = document.getElementById('lanceTimeOut')
const btnStopTimeOut = document.getElementById('stopTimeOut')
const displayTimeOut = document.getElementById('displayTimeOut')

const btnLancerInterval = document.getElementById('lanceInterval')
const btnStopInterval = document.getElementById('stopInterval')
const displayInterval = document.getElementById('displayInterval')

window.onload = (function (time1, time2) {
  displayTimeOut.innerText = time1
  displayInterval.innerText = time2
})(timeOutTime, intervalTime)

btnLancerTimeOut.onclick = StartTimeOut
btnStopTimeOut.onclick = StopTimeOut

btnLancerInterval.onclick = StartInterval
btnStopInterval.onclick = StopInterval

function StartTimeOut() {
  console.log("TimeOut lancé");
  Increment()
}

function Increment() {
  timerTimeOut = setTimeout(() => {
    timeOutTime++
    displayTimeOut.innerText = timeOutTime
    Increment()
  }, 1000)
}

function StopTimeOut() {
  console.log("TimeOut arrêté");
  clearTimeout(timerTimeOut)
}

function StartInterval() {
  console.log("Interval lancé");
  timerInterval = setInterval(() => {
    intervalTime++
    displayInterval.innerText = intervalTime
  }, 1000)
}

function StopInterval() {
  console.log("Interval arrêté");
  clearInterval(timerInterval)
}

