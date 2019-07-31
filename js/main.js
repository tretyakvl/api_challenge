import renderCards from './modules/render-cards.js'
import addSearch from './modules/search.js'

(async () => {
  await renderCards()
  addSearch()
})()
