export default () => {
  const button = document.querySelector('.regions__button')
  const list = document.querySelector('.regions__list')
  const cards = Array.from(document.querySelectorAll('.card'))

  button.addEventListener('click', () => {
    if (list.style.display === 'block') {
      list.style.display = ''
    } else {
      list.style.display = 'block'
    }
  })

  list.addEventListener('click', event => {
    if (event.target.tagName === 'INPUT') {
      filterCards(event.target)
    }
  })

  function filterCards (input) {
    cards.forEach(card => {
      if (card._data.region === input.dataset.region) {
        card.style.display = 'block'
      } else {
        card.style.display = 'none'
      }
    })
  }
}
