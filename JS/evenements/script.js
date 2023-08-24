const btn = document.getElementById('btn')

// 1ere façon
// btn.onclick = function (e) {
//   console.log(e);
// }
// btn.onclick = () => {}
// btn.onclick = callback
btn.onclick = function () {
  // callback2("Quentin")
  console.log(this);
}

btn.onmouseenter = () => {
  console.log(this);
}

// 2e façon
// btn.addEventListener("dblclick", function () {})
// btn.addEventListener("dblclick", () => {})
// btn.addEventListener("dblclick", callback)

function callback() {
  console.log("Callback");
}

function callback2(args) {
  console.log(args);
}