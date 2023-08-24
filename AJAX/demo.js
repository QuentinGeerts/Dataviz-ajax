const result = document.getElementById('result')
const btn = document.getElementById('btn')

btn.onclick = getResult


function getResult() {
  
  const xhr = window.XMLHttpRequest
  ? new XMLHttpRequest()
  : new ActiveXObject('Microsoft.XMLHTTP')

  // 4 : Récupération des données est terminé
  // 200 : La requête s'est bien déroulée
  xhr.onreadystatechange = function () {
    if (this.readyState ==  4 && this.status == 200) {
      console.log(xhr.responseText);
    }
  }
  
  // Paramétrer la requête
  // method : type de la requête : GET, POST, PUT, DELETE
  // url : chemin d'accès vers le server WEB ou le fichier
  // async : booléen (défaut : true) requète synchrone ou asynchrone
  // user : nom d'utilisateur pour l'authentification
  // psw : mot de pass pour l'authentification
  xhr.open('get', 'demo.txt')
  xhr.send()

}