/* Location API */
console.log(window.location)

setTimeout(() => {
  window.location.reload() // перезагрузка страницы
}, 3000)

setTimeout(() => {
  window.location.assign('./catalog.html') // переходит на страницу каталога
  window.location.replace('./catalog.html') // также переходит на страницу каталога, но в истории браузера не сохранится страница, с которой был переход
  window.location.href = './catalog.html' // через сеттер также можно, но лучше первый вариант
}, 3000)

document.addEventListener('click', (event) => { // отменяем переход по ссылкам
  if (event.target.href) {
    event.preventDefault()
    window.location.href = event.target.href
  }
})


/* History API */
console.log(window.history) 

const backButtonElement = document.getElementById('back-button')
const forwardButtonElement = document.getElementById('forward-button')

backButtonElement.addEventListener('click', () => {
  window.history.back() // возвращает назад на шаг
  window.history.go(-2) // назад на 2 шага
})

forwardButtonElement.addEventListener('click', () => {
  window.history.forward() // переносит вперед на шаг
  window.history.go(2) // вперед на 2 шага
})


const addToHistoryButtonElement = document.getElementById('addHistoryStep')
const showHistoryButtonElement = document.getElementById('lookHistory')

addToHistoryButtonElement.addEventListener('click', () => {
  window.history.pushState( // можно поменять на replaceState с такими же аргументами, только меняет последнюю запись
    { // объект с любыми данными, которыми нам захочется
      example: 'Какой-то текст',
    },
    '', // всегда пустая строка
    './catalog.html' // необязательный, аргумент который нужен указать в новой записи
  )
})

showHistoryButtonElement.addEventListener('click', () => {
  console.log('history', window.history)
})

