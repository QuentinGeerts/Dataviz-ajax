const xhr = new XMLHttpRequest()

xhr.onload = function () {

  // Convertir le format string en format JSON
  const myObject = JSON.parse(xhr.responseText)

  // Remplir mes divs avec les informations
  document.getElementById('nom').innerText = myObject.lastname
  document.getElementById('prenom').innerText = myObject.firstname

  console.log(myObject)

  // Convertir le format JSON en format string
  console.log(JSON.stringify(myObject))

}

xhr.open('get', 'demoJSON.json')
xhr.send()