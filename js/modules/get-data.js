const URL = 'https://restcountries.eu/rest/v2/all'

const countries = fetch(URL).then(data => data.json())

export default countries
