const formElement = document.querySelector('.form')
const loginInputElement = document.querySelector('.form__input[name="login"]')
const passwordInputElement = document.querySelector('.form__input[name="password"]')
const submitButtonElement = document.querySelector('.form__button')

console.dir(formElement)
console.dir(loginInputElement)
console.dir(passwordInputElement)
console.dir(submitButtonElement)

/* Getter and setters */
console.log(formElement.action) // getter
formElement.action = './register' // setter
formElement.method = 'post' // setter
formElement.hidden = true // setter
formElement.id = 'my-form' // setter

/* Методы атрибутов */
console.log( formElement.getAttribute('qwerty') ) // Получение
console.log( formElement.getAttribute('data-some-value') )

formElement.setAttribute('qwerty', '0') // Изменение
formElement.setAttribute('data-some-value', '1')

formElement.removeAttribute('qwerty') // Удаление
formElement.removeAttribute('data-some-value')

formElement.hasAttribute('qwerty') // Проверка наличия
formElement.hasAttribute('data-some-value')

/* Через методы атрибутов можно также работать и со свойствами */
formElement.action = '/register'
console.log(formElement.getAttribute('action'))

formElement.setAttribute('method', 'post')
console.log(formElement.method)

/* Необычное поведение value */
const loginInputElem = document.querySelector('.form__input[name="login"]')
console.dir(loginInputElem)
loginInputElem.value = 'admin'
console.log(loginInputElem.getAttribute('value')) // тут будет null
console.log(loginInputElem.value) // тут будет корректное значение admin

loginInputElem.setAttribute('value', 'admin') // если так ставить значение, то будет все норм
console.log(loginInputElem.getAttribute('value')) // => admin
console.log(loginInputElem.value) // => admin
/* Не использовать value через setter (formElement.value = '') */


/* Список всех атрибутов */
console.log(loginInputElem.attributes) // выдает объект со всеми свойствами

/* Чтение и запись data-атрибутов */
const sliderElement = document.querySelector('[data-js-slider]')
console.log(sliderElement.dataset) // выдает объект со всеми перечисленными data-свойствами (напр. data-name="alexander", data-city="moscow")
/* Если передано больше двух слов после data, то будет передано в camelCaseNotation */
sliderElement.dataset.name = 'Max'
console.log(sliderElement.dataset.name)

/* Передача в дата атрибут объекта */
const sliderParams = sliderElement.getAttribute('data-js-slider')
console.log(sliderParams) // выдаст строку

const trueSliderParams = JSON.parse(sliderElement.getAttribute('data-js-slider'))
console.log(sliderParams) // выдаст объект
console.log(sliderParams.direction)
