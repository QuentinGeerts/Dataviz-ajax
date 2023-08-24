const form = document.forms[0]

// récupérer un formulaire
// console.log(document.forms[0]);
// console.log(document.forms['myForm']);
console.log(document.forms.myForm);

form.onsubmit = function (e) {
  // Permet de stopper la propagation de l'événement
  e.preventDefault()
  // console.log(form.children[0]);
  // console.log(form.children['name']);
  console.log(form.children.name.value);
  console.log(form.children.firstname.value);
}