const json = '[{"name":"Afghanistan","topLevelDomain":[".af"],"alpha2Code":"AF","alpha3Code":"AFG","callingCodes":["93"],"capital":"Kabul","altSpellings":["AF","Afġānistān"],"region":"Asia","subregion":"Southern Asia","population":27657145,"latlng":[33.0,65.0],"demonym":"Afghan","area":652230.0,"gini":27.8,"timezones":["UTC+04:30"],"borders":["IRN","PAK","TKM","UZB","TJK","CHN"],"nativeName":"افغانستان","numericCode":"004","currencies":[{"code":"AFN","name":"Afghan afghani","symbol":"؋"}],"languages":[{"iso639_1":"ps","iso639_2":"pus","name":"Pashto","nativeName":"پښتو"},{"iso639_1":"uz","iso639_2":"uzb","name":"Uzbek","nativeName":"Oʻzbek"},{"iso639_1":"tk","iso639_2":"tuk","name":"Turkmen","nativeName":"Türkmen"}],"translations":{"de":"Afghanistan","es":"Afganistán","fr":"Afghanistan","ja":"アフガニスタン","it":"Afghanistan","br":"Afeganistão","pt":"Afeganistão","nl":"Afghanistan","hr":"Afganistan","fa":"افغانستان"},"flag":"https://restcountries.eu/data/afg.svg","regionalBlocs":[{"acronym":"SAARC","name":"South Asian Association for Regional Cooperation","otherAcronyms":[],"otherNames":[]}],"cioc":"AFG"},{"name":"Åland Islands","topLevelDomain":[".ax"],"alpha2Code":"AX","alpha3Code":"ALA","callingCodes":["358"],"capital":"Mariehamn","altSpellings":["AX","Aaland","Aland","Ahvenanmaa"],"region":"Europe","subregion":"Northern Europe","population":28875,"latlng":[60.116667,19.9],"demonym":"Ålandish","area":1580.0,"gini":null,"timezones":["UTC+02:00"],"borders":[],"nativeName":"Åland","numericCode":"248","currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],"languages":[{"iso639_1":"sv","iso639_2":"swe","name":"Swedish","nativeName":"svenska"}],"translations":{"de":"Åland","es":"Alandia","fr":"Åland","ja":"オーランド諸島","it":"Isole Aland","br":"Ilhas de Aland","pt":"Ilhas de Aland","nl":"Ålandeilanden","hr":"Ålandski otoci","fa":"جزایر الند"},"flag":"https://restcountries.eu/data/ala.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}],"cioc":""}]'
const countries = JSON.parse(json)

const template = document.querySelector('template').content
const cardsSection = document.querySelector('.cards')
const list = template.querySelector('.cards__list').cloneNode()
const card = template.querySelector('.card')

for (const country of countries) {
  const copy = card.cloneNode(true)
  copy['_data'] = country
  copy.addEventListener('click', handler)
  addContent(copy, country)
  list.appendChild(copy)
}

function addContent (node, data) {
  const img = node.querySelector('.card__flag')
  img.src = data.flag
  img.alt += data.name
  const name = node.querySelector('.card__name')
  name.textContent = data.name
  const stats = ['population', 'region', 'capital']
  const fields = node.querySelectorAll('.card__data')
  stats.forEach((stat, i) => {
    fields[i].textContent = data[stat]
  })
}
cardsSection.appendChild(list)

function handler (event) {
  event.preventDefault()
  const section = document.querySelector('main')
  const card = template.querySelector('.card--detailed').cloneNode(true)
  const back = card.querySelector('.card__back')
  addContent(card, this._data)
  section.appendChild(card)
  back.addEventListener('click', event => {
    event.preventDefault()
    card.remove()
  })
}
