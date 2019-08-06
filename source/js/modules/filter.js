export default () => {
  const button = document.querySelector('.regions__button')
  const list = document.querySelector('.regions__list')
  const cardsSection = document.querySelector('.cards__list')
  const cards = Array.from(cardsSection.querySelectorAll('.card'))
  const inputs = Array.from(list.querySelectorAll('input'))

  for (const input of inputs) {
    input.checked = false
  }

  button.addEventListener('click', () => {
    button.classList.toggle('opened')
  })

  list.addEventListener('click', event => {
    const input = event.target
    if (input.tagName === 'INPUT') {
      restoreCards()
      filterCards(input)
      button.textContent = input.dataset.region
    }
  })

  function filterCards (input) {
    if (input.dataset.region === 'All') {
      restoreCards()
    } else {
      cards.forEach(card => {
        if (card.data.region !== input.dataset.region) {
          const placeholder = document.createElement('div')
          placeholder.style.display = 'none'
          placeholder.className = 'placeholder'
          card.replaceWith(placeholder)
        } else {
          card.replaceWith(card)
        }
      })
    }
  }

  function restoreCards () {
    const newElements = Array.from(cardsSection.children)

    newElements.forEach((elem, i) => {
      if (elem.classList.contains('placeholder')) {
        cardsSection.replaceChild(cards[i], elem)
      }
    })
  }
}
