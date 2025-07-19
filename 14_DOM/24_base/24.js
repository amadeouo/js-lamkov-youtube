console.log(window) // глобальный объект со свойствами и методами, представляющими браузерно окружение

const divElement = window.document.createElement('div')
divElement.style.width = '100px'
divElement.style.height = '100px'
divElement.style.border = '2px solid red'
window.document.body.appendChild(divElement)
window.document.querySelector('div').remove()
window.document.addEventListener('click', (event) => {
    console.log('Координаты клика:', `x: ${event.x}, y: ${event.y}`)
})
window.addEventListener('scroll', () => {
    console.log('Координаты скролла', window.scrollY)
})
/* Все браузерное окружение */
console.log(window)

/* Основной JavaScript */
console.log(window.Math)
console.log(window.Object.keys({name: 'Александр', age:28, }))
console.log(window.Number('123'))
console.log(window.Boolean(0))

/* BOM (Browser Object Model) */
console.log(window.navigator)
console.log(window.screen)
console.log(window.location)
console.log(window.history)
console.log(window.frames)
console.log(window.fetch)
console.log(window.XMLHttpRequest)

/* DOM (Document Object Model) */
console.log(window.document)



/* BOM (Browser Object Model) */
console.log('Мой браузер', window.navigator)
console.log('Высота окна браузера', window.screen)
console.log('Текущий URL-адрес вкладки браузера:', window.location)
console.log('Длина "истории" текущей сессии браузера', window.history)

/* Сохранить данные в localStorage */
window.localStorage.setItem('id', JSON.stringify({ id: 123 }))

const id = JSON.parse(
    // Получить данные из localStorage
    window.localStorage.getItem('key-name')
)

/* Отправка на сервер GET-запроса и получение ответа */
// window.fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => console.log('Пользователи', users))


/* BOM (Browser Object Model) */
console.log(window.document) // выведется то что html написано (DOM дерево)
console.dir(window.document) // childNode или узлы - дочерние элементы

// Можно обращаться без window.
console.log(document)

// Если скрипт подключен как модуль, то мы можем использовать зарезервированные window переменными
const location = 'Moscow'
console.log('Текущий полный URL-адрес:', window.location.href)