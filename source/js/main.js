import './modules/dark-mode.js'
import './modules/scroll-top.js'
import renderCards from './modules/render-cards.js'
import addSearch from './modules/search.js'
import addFitler from './modules/filter.js'
import addObserver from './modules/image-observer.js'

(async () => {
  await renderCards()
  addObserver()
  addSearch()
  addFitler()
})()
