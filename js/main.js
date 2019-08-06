import './modules/dark-mode.js'
import './modules/scroll-top.js'
import renderCards from './modules/render-cards.js'
import addSearch from './modules/search.js'
import addFitler from './modules/filter.js'
(async () => {
  await renderCards()
  addSearch()
  addFitler()

  const cards = document.querySelectorAll('.card')
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  }

  function onIntersection (entries) {
    entries.forEach(entry => {
      console.log(entry.target)
      observer.unobserve(entry.target)
    })
  }

  const observer = new IntersectionObserver(onIntersection, options)

  for (const card of cards) {
    observer.observe(card)
  }
})()
