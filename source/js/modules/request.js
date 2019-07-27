export default function getData (action) {
  const request = new XMLHttpRequest()

  request.open('GET', 'https://restcountries.eu/rest/v2/all')
  request.addEventListener('load', () => {
    const data = JSON.parse(request.responseText)
    action(data)
  })
  request.send()
}
