const switcher = document.querySelector('#switch')
const body = document.querySelector('body')

switcher.addEventListener('change', event => {
  event.preventDefault()
  if (event.target.checked) body.classList.add('is-dark')
  else body.classList.remove('is-dark')
})
