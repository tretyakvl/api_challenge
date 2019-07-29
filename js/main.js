import './modules/theme-switcher.js'
import render from './modules/cards-render.js'
import data from './modules/get-data.js'
// import getDetails from './modules/details.js'

(async () => {
  const countries = await data
  render(countries)

  const details = document.querySelector('template').content.querySelector('.details')
  const main = document.querySelector('main')
  const cards = document.querySelectorAll('.card')

  cards.forEach(card => {
    card.addEventListener('click', event => {
      const name = event.currentTarget.dataset.name
      const data = countries.find(obj => obj.name === name)
      const node = details.cloneNode(true)
      console.log(node, main)
      main.appendChild(node)
    })
  })
})()
