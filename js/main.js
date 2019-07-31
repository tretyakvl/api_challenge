import renderCards from './modules/render-cards.js'

(async () => {
  await renderCards()
  const cards = Array.from(document.querySelectorAll('.card'))
  const input = document.querySelector('#search')
  let timeout

  input.addEventListener('focus', () => {
    input.addEventListener('keyup', keyUpHandler)
  })

  input.addEventListener('blur', () => {
    input.removeEventListener('keyup', keyUpHandler)
  })

  function keyUpHandler () {
    clearTimeout(timeout)
    if (input.value) {
      timeout = setTimeout(showMatches, 100)
    }

    function showMatches () {
      const regExp = new RegExp(`^${input.value}`, 'i')
      for (const card of cards) {
        if (regExp.test(card._data.name)) {
          console.log(card)
        }
      }
    }
  }
})()
