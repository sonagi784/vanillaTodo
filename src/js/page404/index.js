export default function page404() {
  const $element = document.createElement("div")
  $element.className = "page404"
  $element.innerHTML = "this is page404 page!"

  this.render = ($target) => {
    $target.appendChild($element)
  }
}
