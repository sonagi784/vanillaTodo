export default function side() {
  const $element = document.createElement('div')
  $element.className = 'side'
  $element.innerHTML = 'this is side page!'

  const render = ($target) => {
    $target.appendChild($element)
  }

  return {
    render,
  }
}
