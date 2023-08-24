const API = `https://api.zippopotam.us/BE/postal-code`

const form = document.forms.zip
form.onsubmit = checkZipCode

function checkZipCode(e) {
  e.preventDefault()

  fetch ( API.replace('postal-code', form.zipcode.value) )
    .then(response => response.json())
    .then(data => {

      const resultDiv = document.getElementById('result')
      resultDiv.innerText = ''

      const country = document.createElement('p')
      const countryAb = document.createElement('p')
      const postCode = document.createElement('p')
      
      country.innerText = data.country
      countryAb.innerText = data["country abbreviation"]
      postCode.innerText = data["post code"]

      resultDiv.appendChild(country)
      resultDiv.appendChild(countryAb)
      resultDiv.appendChild(postCode)

      for (const place of data.places) {
        const places = document.createElement('ul')
        const lat = document.createElement('li')
        const lon = document.createElement('li')
        const name = document.createElement('li')
        const state = document.createElement('li')
        const stateAb = document.createElement('li')

        lat.innerText = place.latitude
        lon.innerText = place.longitude
        name.innerText = place['place name']
        state.innerText = place.state
        stateAb.innerText = place['state abbreviation']

        places.appendChild(lat)
        places.appendChild(lon)
        places.appendChild(name)
        places.appendChild(state)
        places.appendChild(stateAb)
        resultDiv.appendChild(places)
      }

    })
}