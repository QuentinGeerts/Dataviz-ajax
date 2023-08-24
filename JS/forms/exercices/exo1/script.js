const form = document.forms.coord
const resetBtn = document.getElementById('reset')
const autocomplete = document.getElementById('autocomplete')
const submit = document.getElementById('submit')
let isValid = false

form.onsubmit = function (e) {
  e.preventDefault()
  if (isValid) {
    console.log("Envoie des données...", form.lastname.value, form.firstname.value);
  }
  else {
    console.log("Ton formulaire est invalide");
  }
}

resetBtn.onclick = function () {
  form.lastname.value = ""
  form.firstname.value = ""
}

autocomplete.onclick = function () {
  form.lastname.value = "Jean"
  form.firstname.value = "Dupont"
}

form.onchange = function () {
  if (form.lastname.value.length == 0
    || form.firstname.value.length == 0) {
    submit.setAttribute('disabled', '')
    isValid = false
  }
  else {
    submit.removeAttribute('disabled')
    isValid = true
  }
}