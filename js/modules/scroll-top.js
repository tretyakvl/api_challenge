const title = document.querySelector('.page-header__title')
const main = document.querySelector('main')

title.addEventListener('click', () => {
  main.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
