export default async () => {
  const countries = await fetch('https://restcountries.eu/rest/v2/all').then(response => response.json())
  const alpha3Codes = {}

  const template = document.querySelector('template').content
  const cardsList = template.querySelector('.cards__list').cloneNode()
  const card = template.querySelector('.card')

  const cardsSection = document.querySelector('.cards')

  for (const country of countries) {
    country.population = formatNumber(country.population)
    const copy = card.cloneNode(true)
    alpha3Codes[country.alpha3Code] = {
      name: country.name,
      data: country
    }

    copy.data = country
    copy.addEventListener('click', showDetails)
    addContent(copy, country)
    cardsList.appendChild(copy)
  }
  cardsSection.appendChild(cardsList)

  function addContent (node, data) {
    const img = node.querySelector('.card__flag')
    img.src = data.flag
    img.alt += data.name
    const name = node.querySelector('.card__name')
    name.textContent = data.name

    const fields = node.querySelectorAll('.card__data')
    let stats = ['population', 'region', 'capital']
    if (fields.length === 8) {
      stats = ['nativeName', 'population', 'region', 'subregion', 'capital', 'topLevelDomain', 'currencies', 'languages']
    }
    stats.forEach((stat, i) => {
      if (stat === 'topLevelDomain') {
        fields[i].textContent = data[stat].join(', ')
      } else if (stat === 'currencies' || stat === 'languages') {
        fields[i].textContent = data[stat].map(stat => stat.name).join(', ')
      } else {
        fields[i].textContent = data[stat]
      }
    })
  }

  function showDetails (event) {
    event.preventDefault()
    const section = document.querySelector('main')
    const card = template.querySelector('.card--detailed').cloneNode(true)
    const back = card.querySelector('.card__back')
    const list = card.querySelector('ul')
    addContent(card, this.data)

    list.append(...this.data.borders.reduce((result, code) => {
      const name = alpha3Codes[code].name
      const link = createLink(name)
      link.data = alpha3Codes[code].data
      link.addEventListener('click', showDetails)
      result.push(link)
      return result
    }, []))

    section.appendChild(card)
    back.addEventListener('click', event => {
      event.preventDefault()
      card.remove()
    })
  }

  function createLink (name) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.classList.add('card__neighbor')
    a.textContent = name
    li.appendChild(a)
    return li
  }

  function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
}
