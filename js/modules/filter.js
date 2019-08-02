export default () => {
  const button = document.querySelector('.regions__button')
  const list = document.querySelector('.regions__list')
  const cardsSection = document.querySelector('.cards__list')
  const cards = Array.from(cardsSection.querySelectorAll('.card'))
  const inputs = Array.from(list.querySelectorAll('input'))

  for (const input of inputs) {
    input.checked = false
    // restoreCards()
  }

  button.addEventListener('click', () => {
    button.classList.toggle('opened')
    if (list.style.display === 'block') {
      list.style.display = ''
    } else {
      list.style.display = 'block'
    }
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
    cards.forEach(card => {
      if (card._data.region !== input.dataset.region) {
        const placeholder = document.createElement('div')
        placeholder.classList.add('placeholder')
        card.replaceWith(placeholder)
      }
    })
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
