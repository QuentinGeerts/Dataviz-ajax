const cart = document.getElementById('cart')
const price = document.getElementById('price')

window.onload = (
  function (value) {
    price.value = value
  }
)(0)

function addToCart(e) {

  // récupération de la ligne du produit sélectionné
  const productRow = e.target.parentNode.parentNode

  // Création du produit dans le panier
  const productRowCart = document.createElement('tr')
  const productLabelCart = document.createElement('td')
  const productPriceCart = document.createElement('td')

  // Paramétrer les informations du produit
  productLabelCart.innerText = productRow.children[0].innerText
  productPriceCart.innerText = productRow.children[1].innerText

  // Ajouter les éléments enfants aux parents
  productRowCart.appendChild(productLabelCart)
  productRowCart.appendChild(productPriceCart)

  cart.appendChild(productRowCart)

  // Mettre à jour le total
  price.value = parseFloat(price.value) + parseFloat(productRow.children[1].innerText)

}