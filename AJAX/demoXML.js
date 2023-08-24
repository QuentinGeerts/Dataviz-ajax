const animeList = []

window.onload = initXHR

function initXHR() {
  const xhr = new XMLHttpRequest()

  xhr.onload = function () {
    getAllAnimes(xhr)
  }

  xhr.open('get', 'animelist.xml')
  xhr.send()
}

function getAllAnimes(xhr) {
  const docXML = xhr.responseXML
  const animes = docXML.getElementsByTagName('anime')

  for (const anime of animes) {
    const title = anime.getElementsByTagName('series_title')[0].textContent
    const type = anime.getElementsByTagName('series_type')[0].textContent
    const max_episodes = anime.getElementsByTagName('series_episodes')[0].textContent

    const animeObject = {
      title: title,
      type: type,
      max_episodes: max_episodes,
    }

    animeList.push(animeObject)
  }

  generateRow()
}

function generateRow() {

  for (const anime of animeList) {

    // Création des éléments du tableau
    const animeRow = document.createElement('tr')
    const animeTitle = document.createElement('td')
    const animeType = document.createElement('td')
    const animeMaxEpisodes = document.createElement('td')

    // Parémeter mon tableau
    animeTitle.innerText = anime.title
    animeType.innerText = anime.type
    animeMaxEpisodes.innerText = anime.max_episodes

    // Ajouter mes colonnes à ma ligne et ajouter la ligne au tableau
    animeRow.appendChild(animeTitle)
    animeRow.appendChild(animeType)
    animeRow.appendChild(animeMaxEpisodes)
    document.getElementById('content').appendChild(animeRow)
    
  }
}