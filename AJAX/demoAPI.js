const COUNTRIES_API = `https://restcountries.com/v2/all`
const GENDERIZE_API = `https://api.genderize.io?name=__name__&country_id=__country__`

window.onload = getCountries

const firstnameInput = document.getElementById('firstname')
const select = document.getElementById('country')
const btn = document.getElementById('searchButton')

firstnameInput.onkeyup = checkInputValidator
btn.onclick = getGenderize

function getCountries() {

  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function () {

    if (xhr.readyState == 4 && xhr.status == 200) {
      // Récupération des données en format JSON
      console.log('xhr.responseText :>> ', xhr.responseText);
      const countries = JSON.parse(xhr.responseText)

      // Créer nos options pour le select des pays
      
      for (const country of countries) {
        const option = document.createElement('option')
        option.innerText = country.translations.fr
        option.setAttribute('value', country.alpha2Code)
        select.appendChild(option)
      }
      
    }

  }
  
  xhr.open('get', COUNTRIES_API)
  xhr.send()
}

function checkInputValidator(event) {

  if (event.target.value == '') {
    btn.setAttribute('disabled', '')
  }
  else {
    btn.removeAttribute('disabled')
  }
}

function getGenderize() {

  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function () {

    if (xhr.readyState == 4 && xhr.status == 200) {
      const genderize = JSON.parse(xhr.responseText)
  
      display(genderize)
    }

  }

  xhr.open(
    'get', 
    GENDERIZE_API
      .replace('__name__', firstnameInput.value)
      .replace('__country__', select.value)
  )
  xhr.send()

}

function display(obj) {
  const result = document.getElementById('result')
  result.innerText = ''

  // Créer mes éléments
  const name = document.createElement('p')
  const gender = document.createElement('p')
  const probability = document.createElement('p')
  const count = document.createElement('p')
  const country_id = document.createElement('p')

  // Paramétrer les éléments
  name.innerText = 'Nom : ' + obj.name
  gender.innerText = 'Genre : ' + obj.gender
  probability.innerText = 'Probabilité : ' + obj.probability * 100 + '%' 
  count.innerText = 'Nombre : ' + obj.count
  country_id.innerText = 'ID Pays : ' + obj.country_id

  result.appendChild(name)
  result.appendChild(gender)
  result.appendChild(probability)
  result.appendChild(count)
  result.appendChild(country_id)
}