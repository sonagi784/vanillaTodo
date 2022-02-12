export default function home() {
  const $element = document.createElement('div')
  $element.className = 'home'
  $element.innerHTML = 'this is home page!'

  const render = ($target) => {
    $target.appendChild($element)
  }

  return {
    render,
  }
}
