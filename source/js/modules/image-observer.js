export default () => {
  const cards = document.querySelectorAll('.card')
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  function onIntersection (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target
        const img = card.querySelector('.card__flag')
        img.src = card.data.flag
        img.addEventListener('load', loadHandler)
        observer.unobserve(entry.target)
      }
    })
  }

  function loadHandler () {
    this.offsetParent.classList.remove('card--loading')
    this.removeEventListener('load', loadHandler)
  }

  const observer = new IntersectionObserver(onIntersection, options)

  for (const card of cards) {
    observer.observe(card)
  }
}
