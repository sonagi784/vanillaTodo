export default function side() {
  const $element = document.createElement("div")
  $element.className = "side"
  $element.innerHTML = "this is side page!"

  this.render = ($target) => {
    $target.appendChild($element)
  }
}
