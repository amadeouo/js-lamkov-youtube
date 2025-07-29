console.log(document.cookie) 

/* Назначение куки */
document.cookie = 'Какие-то данные' // так неправильно
document.cookie = 'username=Alexander' // имя=Значение 
document.cookie = 'age=28'
document.cookie = 'age=55' // перезаписываем значение age

document.cookie = 'date of birth=february 4, 1996' // так не правильно
document.cookie = `${encodeURIComponent('date of birth')}=${encodeURIComponent('february 4, 1996')}` // вот так правильно


/* Самописная функция установки куков */
function setCookie(name, value) {
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
}
setCookie('date', 'feb 4, 1996')

/* Самописная функция получения куков */
function getCookieByName(name) {
  for (const cookieStr of document.cookie.split('; ')) {
     const [cookieName, cookieValue] =  cookieStr.split('=')

     if (cookieName === name) {
      return cookieValue
     }
  }
}
console.log(getCookieByName('username'))

/* Вариант установки куков с опциями для них */
function setCookies(name, value, options = {}) {
  let newEntryBody = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
  
  const optionsAsString = Object.entries(options)
    .map((entry) => entry.join('='))
    .join('; ')
  
  if (optionsAsString) {
    newEntryBody += `; ${optionsAsString}`
  }

  document.cookie = newEntryBody
}

/* Удаление данных */
function deleteCookie(name) {
  setCookies(name, '', { 'max-age': -1 }) // делаем отрицательную максимальную длительность куков
}
deleteCookie('username')


/**
  Хранение данных в браузере
  
  Cookie:
  - данные сохраняются после перезагрузки страницы
  - данные привязаны к конкретному домену
  - могут управляться сервером
  - каждая запись хранит не более 4кб данных
  - для чтения, добавления, изменения и удаления записей нужны кастомные утилитарные функции

  SessionStorage и LocalStorage:
  - данные сохраняются после перезагрузки страницы
  - данные привязаны к конкретному домену
  - не могут управляться сервером
  - количество и объем записей ограничен 5 Мб данных
  - для чтения, добавления, изменения и удаления записей есть встроенные методы

  SessionStorage:
  - существует в рамках текущей активной вкладки

  LocalStorage:
  - данные не имеют сроки давности
 */

console.log(sessionStorage)
console.log(localStorage)


/* Установить данные в sessionStorage */
sessionStorage.setItem('username', 'Alexander') // можно указывать только строки
sessionStorage.setItem('age', 29) // можно указывать только числа
sessionStorage.setItem('ageee', 30)

/* Можно передать данные в формате json*/
sessionStorage.setItem(
  'user', 
  JSON.stringify({
    name: 'Max',
    age: 100,
    isDeveloper: true,
  })
)
/* Получение данных */
console.log(sessionStorage.getItem('username'))
console.log(sessionStorage.getItem('age'))
console.log(typeof sessionStorage.getItem('age'))

// Для того чтобы распарсить переданный JSON
console.log(
  JSON.parse(
    sessionStorage.getItem('user')
  )
)

/* Удаление данных */
sessionStorage.removeItem('ageee')
sessionStorage.clear() // полностью очищает хранилище

