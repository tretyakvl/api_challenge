import './modules/theme-switcher.js'
import './modules/cards-render.js'
import data from './modules/get-data.js'

(async () => {
  const countries = await data

  console.log(countries)
})()
