
const section = document.querySelector('.cards')
const template = document.querySelector('template').content
const cardsList = template.querySelector('.cards__list').cloneNode()
const card = template.querySelector('.card')
const data = []

data.forEach(obj => {
  const clone = card.cloneNode(true)
  const name = clone.querySelector('.card__name')
  const flag = clone.querySelector('.card__flag')
  const fields = clone.querySelectorAll('.card__data')

  name.innerText = obj.name
  flag.alt += obj.name
  flag.src = obj.flag
  fields[0].innerText = obj.population
  fields[1].innerText = obj.region
  fields[2].innerText = obj.capital
  cardsList.appendChild(clone)
})

section.appendChild(cardsList)
