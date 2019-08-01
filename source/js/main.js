import './modules/dark-mode.js'
import renderCards from './modules/render-cards.js'
import addSearch from './modules/search.js'
import addFitler from './modules/filter.js'
(async () => {
  await renderCards()
  addSearch()
  addFitler()
})()
