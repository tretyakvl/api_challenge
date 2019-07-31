export default () => {
  const cards = Array.from(document.querySelectorAll('.card'))
  const input = document.querySelector('#search')
  let timeout

  if (input.value) {
    showMatches()
  }

  input.addEventListener('focus', () => {
    input.addEventListener('keyup', keyUpHandler)
  })

  input.addEventListener('blur', () => {
    input.removeEventListener('keyup', keyUpHandler)
    if (!input.value) {
      showCards()
    }
  })

  function keyUpHandler () {
    clearTimeout(timeout)
    if (input.value) {
      timeout = setTimeout(showMatches, 100)
    } else {
      showCards()
    }
  }

  function showMatches () {
    const regExp = new RegExp(`^${input.value}`, 'i')
    for (const card of cards) {
      if (!regExp.test(card._data.name)) {
        card.style.display = 'none'
      } else {
        card.style.display = 'block'
      }
    }
  }

  function showCards () {
    for (const card of cards) {
      card.style.display = ''
    }
  }
}
