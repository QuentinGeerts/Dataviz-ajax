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

  // État : connaître si le produit est dans le panier ou non
  // true : dans le panier
  // false : pas dans le panier
  let isInCart = false

  // Parcourir tous les produits présents dans le panier
  for (let i = 0; i < cart.children.length; i++) {
    const product = cart.children[i]

    // On vérifie si le produit sélectionné est déjà présent dans le panier sur base de son label et prix
    if (product.children[0].innerText === productRow.children[0].innerText 
      && product.children[1].innerText === productRow.children[1].innerText) {
        // Trouvé
        isInCart = true
        // Incrémente la quantité du produit dans le panier
        product.children[2].innerText = parseInt(product.children[2].innerText) + 1
      }
  }

  if (!isInCart) {
    // Création du produit dans le panier
    const productRowCart = document.createElement('tr')
    const productLabelCart = document.createElement('td')
    const productPriceCart = document.createElement('td')
    const productQuantityCart = document.createElement('td')
    const productDeleteCart = document.createElement('td')
    const productDeleteBtnCart = document.createElement('button')

    // Paramétrer les informations du produit
    productLabelCart.innerText = productRow.children[0].innerText
    productPriceCart.innerText = productRow.children[1].innerText
    productQuantityCart.innerText = 1
    productDeleteBtnCart.innerText = "Supprimer"

    productDeleteBtnCart.onclick = removeToCart

    // Ajouter les éléments enfants aux parents
    productRowCart.appendChild(productLabelCart)
    productRowCart.appendChild(productPriceCart)
    productRowCart.appendChild(productQuantityCart)
    productRowCart.appendChild(productDeleteCart)

    productDeleteCart.appendChild(productDeleteBtnCart)

    cart.appendChild(productRowCart)
  }

  // Mettre à jour le total
  price.value = parseFloat(price.value) + parseFloat(productRow.children[1].innerText)

}

function removeToCart(e) {
  const productToDelete = e.target.parentNode.parentNode

  price.value = parseFloat(price.value) - parseFloat(productToDelete.children[1].innerText)

  if (productToDelete.children[2].innerText > 1) {
    // décrémenter la quantité
    productToDelete.children[2].innerText = parseInt(productToDelete.children[2].innerText) - 1
  }

  else {
    // supprimer le product
    cart.removeChild(productToDelete)
  }

}