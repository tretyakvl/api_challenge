const switcher = document.querySelector('#switch')
const label = document.querySelector('[for=switch]')

if (switcher.checked) {
  document.body.classList.add('is-dark')
  changeLabel()
}
switcher.addEventListener('change', event => {
  changeLabel()

  if (event.target.checked) {
    document.body.classList.add('is-dark')
  } else {
    document.body.classList.remove('is-dark')
  }
})

function changeLabel () {
  if (switcher.checked) {
    label.textContent = 'Light Mode'
  } else {
    label.textContent = 'Dark Mode'
  }
}
